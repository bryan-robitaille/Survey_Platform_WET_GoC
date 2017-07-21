/*
 * LimeSurvey
 * Copyright (C) 2007 The LimeSurvey Project Team / Carsten Schmitz
 * All rights reserved.
 * License: GNU/GPL License v2 or later, see LICENSE.php
 * LimeSurvey is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * See COPYRIGHT.php for copyright notices and details.
 *
 *
 * Description: Javascript file for templates. Put JS-functions for your template here.
 *
 *
 * $Id:$
 */
 
 /*
 * The function focusFirst puts the Focus on the first non-hidden element in the Survey.
 *
 * Normally this is the first input field (the first answer).
 */
function focusFirst(Event)
{

    $('#limesurvey :input:visible:enabled:first').focus();

}
/*
 * The focusFirst function is added to the eventlistener, when the page is loaded.
 *
 * This can be used to start other functions on pageload as well. Just put it inside the 'ready' function block
 */

/* Uncomment below if you want to use the focusFirst function */
/*
$(document).ready(function(){
    focusFirst();
});
*/


$(document).ready(function()
{

    // Scroll to first error
    if($(".input-error").length > 0) {
        $('#bootstrap-alert-box-modal').on('hidden.bs.modal', function () {
            console.log('answer error found');
            $firstError = $(".input-error").first();
            $pixToScroll = ( $firstError.offset().top - 100 );
            $('html, body').animate({
                 scrollTop: $pixToScroll + 'px'
             }, 'fast');
        });
    }


    // Make the label clickable
    $('.label-clickable').each(function(){
        var $that    = $(this);
        var attrId = $that.attr('id');
        if(attrId!=undefined){
            attrId = attrId.replace("label-", "");
        } else {
            attrId = "";
        }
        var $inputEl = $("#"+attrId);
        $that.on('click', function(){
            console.log($inputEl.attr('id'));
            $inputEl.trigger( "click" );
        });
    });

    $('.if-no-js').hide();

    if($(window).width() < 768 )
    {
        // nothing
    }

    //var outerframeDistanceFromTop = 50;
    //topsurveymenubar
    var topsurveymenubarHeight = $('#wb-sm').innerHeight();
    var outerframeDistanceFromTop = topsurveymenubarHeight;
    // Manage top container
    if(!$.trim($('#topContainer .container').html()))
    {
        $('#topContainer').hide();
    }
    else
    {
        $('#topContainer').css({
            top: topsurveymenubarHeight+'px',
        });

        $topContainerHeight = $('#topContainer').height();
        outerframeDistanceFromTop += $topContainerHeight;
    }

    if(!$.trim($('#surveynametitle').html()))
    {
        if(!$.trim($('#surveydescription').html()))
        {
            $('#survey-header').hide();
        }
    }

   $('.language-changer').each(function(){
        $that = $(this);
        if(!$.trim($that.children('div').html()))
        {
            $that.hide();
        }
    });
   

    $('.group-description-container').each(function(){
        $that = $(this);
        if(!$.trim($that.children('div').html()))
        {
            $that.hide();
        }
    });

    // Hide question help container if empty
    $('.questionhelp').each(function(){
        $that = $(this);
        if(!$.trim($that.html()))
        {
            $that.hide();
        }
    });



    // Question index
    if($('.linkToButton').length > 0){
        $('.linkToButton').on('click', function()
        {
            $btnToClick = $($(this).attr('data-button-to-click'));
            $btnToClick.trigger('click');
            return false;
        });
    }


    // Errors
    if($('.emtip').length>0)
    {
        // On Document Load
        $('.emtip').each(function(){
            if($(this).hasClass('error'))
            {
                $(this).parents('div.questionhelp').removeClass('text-info').addClass('text-danger');
            }
        });

        // On em change
        $('.emtip').each(function(){
            $(this).on('classChangeError', function() {
                $parent = $(this).parent('div.questionhelp');
                $parent.removeClass('text-info',1);
                $parent.addClass('text-danger',1);

                if ($parent.hasClass('hide-tip'))
                {
                    $parent.removeClass('hide-tip',1);
                    $parent.addClass('tip-was-hidden',1);
                }

                $questionContainer = $(this).parents('div.question-container');
                $questionContainer.addClass('input-error');
            });

            $(this).on('classChangeGood', function() {
                $parent = $(this).parents('div.questionhelp');
                $parent.removeClass('text-danger');
                $parent.addClass('text-info');
                if ($parent.hasClass('tip-was-hidden'))
                {
                    $parent.removeClass('tip-was-hidden').addClass('hide-tip');
                }
                $questionContainer = $(this).parents('div.question-container');
                $questionContainer.removeClass('input-error');
            });
        });
    }

    // Hide the menu buttons at the end of the Survey
    if($(".hidemenubutton").length>0)
    {
        $('.navbar-right').hide();
    }

    // Survey list footer
    if($('#surveyListFooter').length>0)
    {
        $surveyListFooter = $('#surveyListFooter');
        $('#outerframeContainer').after($surveyListFooter);
    }

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


});

//Load survey button
function loadAll()
{
	$('#loadallbtn').trigger('click');
}

function saveAll()
{
	$('#saveallbtn').trigger('click');
}

function clearAll()
{
	$('#clearall').trigger('click');
}

window.alert = function(message, title) {
    if($("#bootstrap-alert-box-modal").length == 0) {
        $("body").append('<div id="bootstrap-alert-box-modal" class="modal fade">\
            <div class="modal-dialog">\
                <div class="modal-content">\
                    <div class="modal-header" style="min-height:40px;">\
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                        <h4 class="modal-title"></h4>\
                    </div>\
                    <div class="modal-body"><p></p></div>\
                    <div class="modal-footer">\
                        <a href="#" data-dismiss="modal" class="btn btn-default">Close</a>\
                    </div>\
                </div>\
            </div>\
        </div>');
    }
    $("#bootstrap-alert-box-modal .modal-header h4").text(title || "");
    $("#bootstrap-alert-box-modal .modal-body p").text(message || "");

    $(document).ready(function()
    {
        $("#bootstrap-alert-box-modal").modal('show');
    });
};
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
(function( $, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
/*var $document = wb.doc,

    onXXSmallView = function() {
		return;
	},

	onXSmallView = function() {
		return;
	},

	onSmallView = function() {
		return;
	},

	onMediumView = function() {
		return;
	},

	onLargeView = function() {
		return;
	},

	onXLargeView = function() {
		return;
	};

$document.on( "xxsmallview.wb xsmallview.wb smallview.wb mediumview.wb largeview.wb xlargeview.wb", function( event ) {
	var eventType = event.type;

	switch ( eventType ) {

	case "xxsmallview":
		onXXSmallView();
		break;

	case "xsmallview":
		onXSmallView();
		break;

	case "smallview":
		onSmallView();
		break;

	case "mediumview":
		onMediumView();
		break;

	case "largeview":
		onLargeView();
		break;

	case "xlargeview":
		onXLargeView();
		break;
	}
});*/

window["wb-data-ajax"] = {
	corsFallback: function( fetchObj ) {
		fetchObj.url = fetchObj.url.replace(".html", ".htmlp");
		return fetchObj;
	}
};

});

