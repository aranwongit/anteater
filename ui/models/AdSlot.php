<?php
class AdSlot extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function insertAdSlotInfo($arrParams) {
        $this->load->library('DbUtil');

        $arrCheckMediaLegal = [
            'select' => 'app_id,media_platform,',
            'where' => 'app_id=' . $arrParams['app_id'] .' AND media_name=\'' . $arrParams['media_name'] . '\' AND check_status=1',
            'limit' => '1',
        ];

        // TODO 后续做好审核通过appid 列表的缓存，减少数据库读取
        $arrCheckRes = $this->dbutil->getMedia($arrCheckMediaLegal);
        if (empty($arrCheckRes[0])
            || empty($arrCheckRes[0]['app_id'])) {
            return false;
        }

        //  错误 ： 查询 广告位类型表： adslot_style_info 获取此种广告位对应的广告上游 是 baidu 还是 xxx
        //$arrSelectSlotAllStyles = [
        //    'select' => 'slot_style_id,slot_style,size',
        //    'where' => "slot_type='" . $arrParams['slot_type'],
        //    'limit';
        //];

        $arrParams['app_id'] = $arrCheckRes[0]['app_id'];
        // 查询预分配slotid的表 获取上游 slotid 
        $arrParams['proportion'] = 'select adslot_style_info'
        
        $arrRes = $this->dbutil->setAdSlot($arrParams);
        return $arrRes;
    }

    /**
     *
     */
    private function addExtraInfo() {
        //
    }
}
