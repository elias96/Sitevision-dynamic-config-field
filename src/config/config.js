/* eslint-disable no-undef */
$(function () {
  $("#addComponentButton").on("click", function () {
    // Get count of preexisting pages
    const count = $("input").length;
    const newCount = count + 1;

    const el = `
      <div class="form-group">
        <label>Component - ${newCount}</label>
        <input type="hidden" data-component="page-list" name="pages-${newCount}" id="pages-${newCount}" />
      </div>
    `;

    $(".panel-body").append($(el));
    $("body").trigger("setup-component", "#pages-"+newCount);
    allowCreation = true;
  });
});
