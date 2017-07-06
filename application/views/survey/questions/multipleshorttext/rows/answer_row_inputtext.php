<?php
/**
* Multiple short texts question, item input text Html

* @var $question
* @var $alert
* @var $extraclass
* @var $sDisplayStyle
* @var $myfname
* @var $tiwidth
* @var $prefix
* @var $suffix
* @var $kpclass
* @var $maxlength
* @var $dispVal
* @var $checkconditionFunction
*/
?>

<!--answer_row_inputtext -->
<div id="javatbd<?php echo $myfname; ?>" class="question-item answer-item text-item form-horizontal col-sm-8 <?php echo $extraclass;?>" <?php echo $sDisplayStyle;?> >
    <div class="form-group row">

        <?php if ($alert):?>
            <!--  color code missing mandatory questions red -->
            
                <div class="label label-danger errormandatory pull-right" role="alert">
                    <?php echo $question; ?>
                </div>
            
        <?php else:?>
            <label for="answer<?php echo$myfname;?>">
                <?php echo $question; ?>
            </label>
        <?php endif;?>

        
            <?php echo $prefix; ?>
            <input
                class="text <?php echo $kpclass; ?> form-control"
                type="text"
                name="<?php echo $myfname; ?>"
                id="answer<?php echo $myfname; ?>"
                value="<?php echo $dispVal; ?>"
                onkeyup="<?php echo $checkconditionFunction; ?>"
                <?php echo $maxlength; ?>
                />
            <?php echo $suffix; ?>
     
    </div>
</div>
<!-- end of answer_row_inputtext -->
