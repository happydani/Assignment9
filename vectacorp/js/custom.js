/*global $ */
$(function () {
	'use strict';
	$(document).tooltip();

	$("nav .responsive-menu a").tooltip({
		content: "VectaCorp is your Home for scalable e-Business Solutions"
	});

	$("nav .responsive-menu a").tooltip("option", "content", "Awesome title!");

	$("#tabs").tabs();

	$("#tabMgt").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
	$("#tabMgt li").removeClass("ui-corner-top").addClass("ui-corner-left");

	$("#accordion").accordion();


	$(function () {
		function handleShape(e) {
			$(".shape")
				.removeClass("circle pill square rectangle")
				.addClass($(e.target).val());
		}

		function handleToggle(e) {
			var target = $(e.target),
				checked = true,
				value = '';

			if (target.is(".brand-toggle")) {
				checked = target.is(":checked");
				value = $("[name='brand']")
					.filter(":checked")
					.attr("data-" + target[0].id);
				$(".shape").css(target[0].id, checked ? value : "");
			} else {
				$(".shape").toggleClass(target[0].id, target.is(":checked"));
			}
		}

		function updateBrand() {
			handleShape({
				target: $("[name='shape']:checked")
			});
			$(".toggle:checked").each(function () {
				handleToggle({
					target: $(this)
				});
			});
		}

		// Initalize widgets
		$("input").checkboxradio();
		$(".shape-bar, .brand").controlgroup();
		$(".toggles").controlgroup({
			direction: "vertical"
		});

		// Bind event handlers
		$("[name='shape']").on("change", handleShape);
		$(".toggle").on("change", handleToggle);
		$("[name='brand']").on("change", updateBrand);

		// Set initial values
		updateBrand();
	});
	$("#companysize").selectmenu();

	$("#dialog").dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 100
		},
		hide: {
			effect: "blind",
			duration: 100
		}
	});
//window.console.log(open);
	$("#opener").on("click", function () {
		$("#dialog").dialog("open");
	});

}); //end document ready