<?php
/**
 * Gender question, radio item Html
 *
 * @var $name
 * @var $checkconditionFunction
 * @var $fChecked
 * @var $mChecked
 * @var $naChecked
 * @var $value
 */
?>

<!--Gender question, radio display -->

<!-- answer -->
<div class="answers-list radio-list">

    <!-- Female -->
    <div class="col-xs-4 answer-item radio-item radio">
        <input
            class="radio"
            type="radio"
            name="<?php echo $name;?>"
            id="answer<?php echo $name;?>F"
            value="F"
            <?php echo $fChecked; ?>
            onclick="<?php echo $checkconditionFunction; ?>"
            aria-labelledby="label-answer<?php echo $name;?>F"
        />

        <label for="answer<?php echo $name;?>F" class="answertext"></label>
        <!--
             The label text is provided inside a div,
             To respect the global HTML flow of other question types
        -->
        <div class="label-text label-clickable" id="label-answer<?php echo $name;?>F">
            <?php eT('Female');?>
        </div>
    </div>

    <!-- Male -->
    <div class="col-xs-4 answer-item radio-item radio">
        <input
            class="radio"
            type="radio"
            name="<?php echo $name;?>"
            id="answer<?php echo $name;?>M"
            value="M"
            <?php echo $mChecked;?>
            onclick="<?php echo $checkconditionFunction; ?>"
            aria-labelledby="label-answer<?php echo $name;?>M"
        />

        <label for="answer<?php echo $name;?>M" class="answertext"></label>
        <!--
             The label text is provided inside a div,
             To respect the global HTML flow of other question types
        -->
        <div class="label-text label-clickable" id="label-answer<?php echo $name;?>M">
            <?php eT('Male');?>
        </div>
    </div>

    <!-- No answer -->
    <?php if($noAnswer):?>
        <div class="col-xs-4 answer-item radio-item noanswer-item radio">
            <input
                class="radio"
                type="radio"
                name="<?php echo $name;?>"
                id="answer<?php echo $name;?>"
                value=""
                <?php echo $naChecked;?>
                onclick="<?php echo $checkconditionFunction; ?>"
                aria-labelledby="label-answer<?php echo $name;?>"
            />

            <label for="answer<?php echo $name;?>" class="answertext"></label>
            <!--
                 The label text is provided inside a div,
                 To respect the global HTML flow of other question types
            -->
            <div class="label-text label-clickable" id="label-answer<?php echo $name;?>">
                <?php eT('No answer'); ?>
            </div>
        </div>
    <?php endif;?>

    <!-- Value -->
    <input
        type="hidden"
        name="java<?php echo $name;?>"
        id="java<?php echo $name; ?>"
        value="<?php echo $value;?>"
    />
</div>
<!-- end of answer -->
