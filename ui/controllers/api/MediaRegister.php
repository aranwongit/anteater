<?php
/**
 * media注册接口
 * szishuo
 */
class MediaRegister extends MY_Controller {

    const VALID_APP_MEDIA_KEY = [
        'media_name',
        'platform',
        'app_package_name',
        'media_keywords',
        'media_desc',
        'app_download_url',
    ];

    const VALID_H5_MEDIA_KEY = [
        'media_name',
        'platform',
        'url',
        'media_keywords',
        'media_desc',
    ];

    const VALID_PN_MEDIA_KEY = [
        'media_name',
        'platform',
        'public_num_name',
        'public_num_type',
        'public_num_object',
        'media_keywords',
        'media_desc',
    ];

    public function __construct() {
        parent::__construct();
        $this->load->model('User');
        $this->arrUser = $this->User->checkLogin();
    }

    /**
     * 基本信息注册
     */
    public function index() {//{{{//
        if (empty($this->arrUser)) {
            return $this->outJson('', ErrCode::ERR_NOT_LOGIN);
        }

        $arrPostParams = $this->input->post();
        switch($arrPostParams['platform']) {
            case 'h5':
                $strValidKeys = self::VALID_H5_MEDIA_KEY;
                break;
            case 'public_num':
                $strValidKeys = self::VALID_PN_MEDIA_KEY; 
                break;
            default:
                $strValidKeys = self::VALID_APP_MEDIA_KEY;
        }

        if (empty($arrPostParams)
            || count($arrPostParams) !== count($strValidKeys)) {
            return $this->outJson('', ErrCode::ERR_INVALID_PARAMS); 
        }

        // TODO 各种号码格式校验
        foreach ($arrPostParams as $key => &$val) {
            if(!in_array($key, $strValidKeys)) {
                return $this->outJson('', ErrCode::ERR_INVALID_PARAMS); 
            }
            $val = $this->security->xss_clean($val);
        }
        $arrPostParams['email'] = $this->arrUser['email'];
        $this->load->model('Media');
        $bolRes = $this->Media->insertMediaInfo($arrPostParams);
        if ($bolRes) {
            return $this->outJson('', ErrCode::OK, '媒体注册成功');
        }
        return $this->outJson('', ErrCode::ERR_SYSTEM);
    }//}}}//

}
