<?php
	class Finance extends CI_Model{
		public function __construct(){
			parent::__construct();
		}


        /**
         * 获取提现列表
         */
		public function getTakeMoneyList($account_id,$startDate,$endDate,$pageSize,$currentPage,$status){
			if(empty($status)){
				$statusStr = '';
			}else{
				$statusStr = ' AND status = '.$status;
			}

			if($currentPage == 1){
				$currentPage = 0;
			}else{
				$currentPage = ($currentPage - 1) * $pageSize;
            }

            /* 提现单查询 */
			$listWhere = array(
				'select' => 'id,time,account_id,number,money,bill_list,info,status,remark',
				'where' => 'time > '.$startDate.' AND time < '.$endDate.' AND account_id = '.$account_id.$statusStr,
				'order_by' => 'time',
				'limit' => empty($pageSize) || empty($currentPage) ? '0,20' : $currentPage.','.$pageSize,
            );
			$this->load->library("DbUtil");
			$tmrList = $this->dbutil->getTmr($listWhere);
			
            if(!empty($tmrList)){
                foreach($tmrList as $key => $value){
                    $tmrList[$key]['time'] = date("Y-m-d H:i:s",$value['time']);
                    $tmrList[$key]['bill_list'] = unserialize($value['bill_list']);
                    $tmrList[$key]['info'] = unserialize($value['info']);
                }
            }
            /* end */

            /* 分页信息查询 */
			$totalWhere = array(
				'select' => 'count(*)',
				'where' => 'time > '.$startDate.' AND time < '.$endDate.' AND account_id = "'.$account_id.'"'.$statusStr,
			);

			$totalCount = $this->dbutil->getTmr($totalWhere);
            
            $paginAtion = array(
                'current' => empty($currentPage) ? '1':$currentPage,
                'pageSize' => $pageSize,
                'total' => $totalCount[0]['count(*)'],
            );
            /* end */

            /* 账户余额查询 */
            $balanceWhere = array(
                'select' => 'money',
                'where' => 'account_id = '.$account_id.' AND status = "1"',
            );

            $AccBalance = $this->dbutil->getAccBalance($balanceWhere);
            /* end */

            /* 财务认证状态 */
            $financeWhere = array(
                'select' => 'check_status',
                'where' => 'account_id = '.$account_id,
            );
            $strFinance = $this->dbutil->getAccount($financeWhere);
            /* end */
			$result['list'] = $tmrList;
            $result['balance'] = $AccBalance[0]['money'];
            $result['finance_status'] = $strFinance[0]['check_status'];
			$result['pagination'] = $paginAtion;
			return $result;
		}

        /**
         * 获取月账单列表
         */
		public function getMonthlyBill($account_id,$pageSize,$currentPage){
			if($currentPage == 1){
				$currentPage = 0;
			}else{
				$currentPage = ($currentPage - 1) * $pageSize;
			}

			$listWhere = array(
				'select' => 'time,account_id,app_id,media_name,media_platform,money,status',
				'where' => 'account_id = '.$account_id,
				'order_by' => 'time',
				'limit' => empty($pageSize) || empty($currentPage) ? '0,20' : $currentPage.','.$pageSize,
            );
			$this->load->library("DbUtil");
			$data = $this->dbutil->getMonthly($listWhere);

            foreach($data as $k => $v){
                $data[$k]['time'] = date('Y-m',$v['time']);
            }

			if(empty($data)){
				return $data;
			}	

			$totalWhere = array(
				'select' => 'count(*)',
				'where' => 'account_id = "'.$account_id.'"',
			);

			$totalCount = $this->dbutil->getMonthly($totalWhere);

            $paginAtion = array(
                'current' => empty($currentPage) ? '1':$currentPage,
                'pageSize' => $pageSize,
                'total' => $totalCount[0]['count(*)'],
            );
			$result['list'] = $data;
			$result['pagination'] = $paginAtion;
			
			return $result;
		}

		/* 获取提现单详情 */
		public function getTakeMoneyInfo($account_id,$number){
			$where = array(
				'select' => '',
				'where' => 'account_id = "'.$account_id.'" AND number = '.$number,
			);

			$this->load->library("DbUtil");
			$data = $this->dbutil->getTmr($where);
			
			if(empty($data)){
				return $data;
			}

			$data[0]['bill_list'] = unserialize($data[0]['bill_list']);
			$data[0]['info'] = unserialize($data[0]['info']);

			return $data[0];
		}

		/*获取日账单列表*/
		public function getDailyBillList($appid,$startDate,$endDate,$limit){
			$listWhere = array(
				'select' => 'time,media_name,media_platform,money',
				'where' => 'time > '.$startDate.' AND time < '.$endDate.' AND app_id = "'.$appid.'"',
				'order_by' => 'time',
				'limit' => '0,'.$limit,
			);
            
            $this->load->library("DbUtil");
			$data = $this->dbutil->getDaily($listWhere);

			if(empty($data)){
				return $data;
			}

			foreach($data as $key => $value){
				$data[$key]['time'] = date("Y-m-d",$value['time']);
			}
            
            $totalWhere = array(
				'select' => 'count(*)',
				'where' => 'time > '.$startDate.' AND time < '.$endDate.' AND app_id = "'.$appid.'"',
			);

			$totalCount = $this->dbutil->getDaily($totalWhere);
 
            $paginAtion = array(
                'current' => empty($currentPage) ? '1':$currentPage,
                'pageSize' => $limit,
                'total' => $totalCount[0]['count(*)'],
            );
			$result['list'] = $data;
			$result['pagination'] = $paginAtion;
			
			return $result;
		}

		/**
		 * 检查账户财务状态
		 */
		public function checkFinanceInfo($account_id){
			$where = array(
				'select' => 'check_status',
				'where' => 'account_id = "'.$account_id.'"',
			);
			$this->load->library('DbUtil');
			$status = $this->dbutil->getAccount($where);
			$status = $status[0]['check_status'];
			
			if($status === '3'){
				return $status;
			}else{
				return [];
			}
		}

		/**
		 * 查询账户余额
		 */
		public function getAccountMoney($account_id){
			$where = array(
				'select' => 'status,money',
				'where' => 'account_id = "'.$account_id.'"',
			);

			$this->load->library('DbUtil');
			$result = $this->dbutil->getAccBalance($where);
			
			if(empty($result)){
				return [];
			}

			$data['money'] = floatval($result[0]['money']);
			$data['status'] = (int)$result[0]['status'];
			
			return $data;
		}

		/**
		 * 提现操作
		 */
		public function confirmTakeMoney($account_id,$email,$money){
            /* 查询最后一次提现时间 */
            $endWhere = array(
                'select' => 'time',
                'where' => 'account_id = '.$account_id.' AND status = "2"',
                'order_by' => 'time desc',
                'limit' => '0,1',
            );
            $endTime = $this->dbutil->getTmr($endWhere);
            if(empty($endTime)){
                $startDate = 1483200000;
            }else{
                $startDate = $endTime[0]['time'];
            } 
            $endDate = time();

            /* 获取可以提现的月账单 */
            $billWhere = array(
				'select' => 'id,time,app_id,media_name,media_platform,money',
				'where' => 'time > '.$startDate.' AND time <'.$endDate.' AND account_id = "'.$account_id.'"',
            );
			$this->load->library('DbUtil');
			$tmpList = $this->dbutil->getMonthly($billWhere);
			
			foreach($tmpList as $key => $value){
				$billList[$key]['id'] = $value['id'];
				$billList[$key]['time'] = date("Y-m",$value['time']);
				$billList[$key]['app_id'] = $value['app_id'];
				$billList[$key]['media_name'] = $value['media_name'];
				$billList[$key]['media_platform'] = $value['media_platform'];
				$billList[$key]['money'] = $value['money'];
            }

            /*获取媒体信息*/
			$infoWhere = array(
				'select' => 'email,contact_person,phone,bank_account,company_address,company,bank,bank_branch',
				'where' => 'account_id = "'.$account_id.'"',
			);
			$tmpInfo = $this->dbutil->getAccount($infoWhere);
			$tmpInfo[0]['media'] = $billList[0]['media_name'].'等';
			$tmpInfo[0]['money'] = $money;
			$info['channel_info'] = $tmpInfo[0];
            
            /* 获取开票信息 */
            $this->config->load('company_invoice_info');
            $info['company_info'] = $this->config->item('invoice')['info'];
            $info['mail'] = $this->config->item('invoice')['mail'];
            $info['invoice_info'] = '';

			$params = array(
				0 => array(
					'type' => 'insert',
					'tabName' => 'tmr',
					'data' => array(
						'time' => time(),
						'account_id' => $account_id,
						'number' => date("YmdHi").mt_rand(101,999),
						'money' => $money,
						'bill_list' => serialize($billList),
						'info' => serialize($info),
						'remark' => '',
						'status' => '1',
						'create_time' => time(),
						'update_time' => time(),
					),
				),
				1 => array(
					'type' => 'update',
					'tabName' => 'accbalance',
					'where' => 'account_id = "'.$account_id.'"',
					'data' => array(
						'money' => 0,
						'update_time' => time(),
					),
				),
				2 => array(
					'type' => 'update',
					'tabName' => 'monthly',
					'where' => 'time > '.$startDate.' AND time <'.$endDate.' AND account_id = "'.$account_id.'"',
					'data' => array(
						'status' => '2',
						'update_time' => time(),
					),
				),
			);
			
			$result = $this->dbutil->sqlTrans($params);
            
            return $result;
		}
	}
?>	
