<?php
/**
 * Error code definition.
 *
 * System/framework/exception: the errno is less than 1000.
 *
 * | Module                | Specific Error Code  |
 * | 1000 (auto increment) | 000 (auto increment) |
 */
class ErrCode {

    const OK = 0;

    const ERR_SYSTEM     = 1;
    const ERR_INVALID_PARAMS = 2;
    const ERR_LOGIN_FAILED = 3;
    const ERR_DUPLICATE_ACCOUNT = 4;

    /**
     * @param array  $arrResponse
     * @param int    $intErrCode
     * @param string $strErrMsg   Use the default error message if the parameter is not provided.
     *
     * @return array
     */
    public static function format($arrResponse, $intErrCode, $strErrMsg=null) {//{{{//
        if (is_null($strErrMsg)) {
            $strErrMsg = self::getDefaultErrMsg($intErrCode);
        }
        return [
            'code' => $intErrCode,
            'msg'  => $strErrMsg,
            'data' => $arrResponse,
        ];
    }//}}}//

    /**
     * @param int $intErrCode
     *
     * @return string
     */
    public static function getDefaultErrMsg($intErrCode) {
        switch ($intErrCode) {
            case self::OK:
                return '';
            case self::ERR_SYSTEM:
                return '系统错误.';
            case self::ERR_INVALID_PARAMS:
                return '参数错误.';
            case self::ERR_LOGIN_FAILED:
                return '用户名或密码错误.';
            case self::ERR_DUPLICATE_ACCOUNT:
                return '用户已存在';
            default:
                return 'Unknown error type.';
        }
    }
}
