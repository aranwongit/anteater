<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * 获取收入明细
 */

class InCome extends MY_Controller{
	public function __construct(){
		parent::__construct();
	}

    /* 月账单 */
	public function monthlyBill(){
        if(empty($this->arrUser)){
            return $this->outJson('',ErrCode::ERR_NOT_LOGIN);
        }

        $pageSize = $this->input->get("pagesize",true);
        $currentPage = $this->input->get("currentpage",true);

        $pageSize = empty($pageSize) ? 20 : $pageSize;
        $currentPage = empty($currentSize) ? 1 : $currentPage;
        
        $account_id = $this->arrUser['account_id'];
        $email = $this->arrUser['email'];
		$this->load->model("Finance");
		$result = $this->Finance->getMonthlyBill($account_id,$pageSize,$currentPage);
        
        if(empty($result) || count($result) == 0){
			return $this->outJson('',ErrCode::ERR_INVALID_PARAMS,'暂无月账单');
		}

		return $this->outJson($result,ErrCode::OK,'月账单列表获取成功');
    }

    /* 日账单 */
	public function dailyBill(){
        if(empty($this->arrUser)){
            return $this->outJson('',ErrCode::ERR_NOT_LOGIN);
        }

        $appid = $this->input->get("appid",true);
		$startDate = strtotime($this->input->get("curDate",true)) - 1;
        $endDate = strtotime(date("Y-m-t",$startDate+1)) + 86400;
		$dayNumber = date("t",$startDate+1);

		if(empty($appid) || empty($startDate) || $startDate == -1){
            return $this->outJson('',ErrCode::ERR_INVALID_PARAMS);
		}
		$this->load->model("Finance");
		$result = $this->Finance->getDailyBillList($appid,$startDate,$endDate,$dayNumber);
		if(empty($result) || count($result) == 0){
            return $this->outJson('',ErrCode::ERR_INVALID_PARAMS,'获取日账单失败');
		}

        return $this->outJson($result,ErrCode::OK,'获取日账单成功');
	}
}
?>
