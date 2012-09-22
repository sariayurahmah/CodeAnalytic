<?php if (!defined('BASEPATH'))    exit('no direct script user allowed');

/**
 * CodeAnalytic
 *
 * An open source application development cms support for php 4.3 and newest
 *
 * @package		CodeAnalytic
 * @author		CodeAnalytic Team Web Developer
 * @copyright           Copyright (c) 2012 , CodeAnalytic, Inc.
 * @license		http://codeanalytic.com/application-license
 * @link		http://codeanalytic.com
 * @since		Version 0.1
 * @filesource
 */
// ------------------------------------------------------------------------

/**
 * Views 
 *
 * @package		CodeAnalytic
 * @subpackage          View
 * @category            Function
 * @author		CodeAnalytic Team Web Developerwidget_censor_form
 */ 
?>
   <div id="top_tap" class="dinamic_tap">
            <span><?php echo ca_translate("censor form") ?></span>            
        </div>
<div class="small_form" style="border-right: 1px solid #EBEBEB; float: left; padding-right: 5px "> 
    <form id="myform" method="post" onsubmit="return false">
        <p class="ui-state-highlight">
            <label style="width: 28%"><?php echo ca_translate('word'); ?></label>
            <input type="text" name="word" style="width: 68%" class="form_field keyboardInput" validation="required" value="<?php echo set_value('word', isset($default['word']) ? $default['word'] : ''); ?>">
        </p> 
        <p class="ui-state-highlight">
            <label style="width: 28%"><?php echo ca_translate('replace'); ?></label>
            <input type="text" name="replace" style="width: 68%" class="form_field keyboardInput" validation="required" value="<?php echo set_value('replace', isset($default['replace']) ? $default['replace'] : ''); ?>">
        </p>
        <p class="ui-state-disabled" id="p_submit"  style="width: 98%; margin-left: -3.3%">
            <a href="javascript:void(0)"  id="btn_submit" style="left: 33%" onclick="<?php echo isset($type) ? "ca_add_action('word_censor/$action_form',this);" : "ca_edit_action('word_censor/$action_form',this)" ?>" > <?php echo isset($type) ? ca_translate('submit') : ca_translate('update') ?></a> 
            <a id="btn_submit" href="javascript:void(0)" style="left: 33%" onclick="ca_load('word_censor/index/', '#cen_right')"><?php echo ca_translate('reset'); ?></a>
        </p>
    </form>
</div>
<?php ca_vir_keyboard() ?>