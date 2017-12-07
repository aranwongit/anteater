<?php
/**
 * 账户相关 总类
 */


class Account extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    /**
     * 获取渠道信息
     */
    public function getInfo($account_id) {
        $this->load->library('DbUtil');
        $where = array(
            'select' => 'company,email,phone,contact_person,financial_object,collection_company,contact_address,bussiness_license_num,bussiness_license_pic,account_open_permission,account_company,bank,city,bank_branch,bank_account,remark,check_status',
            'where' => 'account_id = '.$account_id,
        );
        $arrInfo = $this->dbutil->getAccount($where);
        
        if(empty($arrInfo)){
            return [];
        }

        return $arrInfo[0];
    } 

    /**
     * 账户基本信息注册
     * @param array $arrParams
     * @return array
     */
    public function insertAccountBaseInfo($arrParams) {
        $this->load->library('DbUtil');
        $arrRes = $this->dbutil->setAccount($arrParams);
        return $arrRes;
    }

    /**
     * 用户基本信息修改
     * @param array
     * @return bool
     */
    public function updateAccountBaseInfo($arrParams) {
        $this->load->library('DbUtil');
        $bolRes = $this->dbutil->udpAccount($arrParams);
        return $bolRes;
    }

    /**
     * 账户财务信息提交
     * @param array $arrParams
     * @return bool
     */
    public function updateAccountFinanceInfo($arrParams) {
        $this->load->library('DbUtil');
        $bolRes = $this->dbutil->udpAccount($arrParams);
        return $bolRes;
	}

	/**
	 * 获取重置密码的验证码
	 */
	public function resetPwdCode($email){
		var_dump($email);
		$where = array(
			'select' => '',
			'where' => 'email = "'.$email.'"',
		);
		$this->load->library("DbUtil");
		$result = $this->dbutil->getAccount($where);

		if(empty($result) || count($result) == 0){
			$res = 2;
			return $res;
		}

		$this->load->library("RedisUtil");
        $this->load->helper('createkey');
        $token = keys(6);
		$RdsKey = 'ResetPwd_'.$email;
		$RdsValue = array(
			'email' => $email,
			'code' => $token,
		);

		$this->load->library('email');
		$this->email->from('15911129682@163.com', 'SSP平台');
		$this->email->to($email);
		$this->email->subject('XX媒体更换邮箱通知');
        $msgHtml = '<div><span>尊敬的用户:</span><br/><br/><div>您在媒体平台(<a href="http://www.baidu.com/">http://www.baidu.com/</a>),更换邮箱的验证码是：<b>'.$token.'</b> (该验证码在1小时内有效，请尽快进行验证)</div><br/><span>能力有限平台</span></div>';
        $this->email->message($msgHtml);

		$res = $this->email->send();
		//echo $this->email->print_debugger();
		
		if($res){
			$this->redisutil->set($RdsKey,serialize($RdsValue));
			$this->redisutil->expire($RdsKey,60*5);
		}

		return $res;
	}

	/**
	 * 重置密码
	 */
	public function UpdatePwd($email,$newPwd,$confirmPwd){
		$where = array(
			'passwd' => md5($newPwd),
			'where' => 'email = "'.$email.'"',
		);

		$this->load->library('DbUtil');
		$result = $this->dbutil->udpAccount($where);

		if($result['code'] == 0){
			return true;
		}else{
			return false;
		}
	}
}
?>
