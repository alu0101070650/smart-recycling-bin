(function($){
    $.fn.getFormData = function(){
        let data = {};
        const dataArray = $(this).serializeArray();
        for(let i=0;i<dataArray.length;i++){
            data[dataArray[i].name] = dataArray[i].value;
        }
        return data;
    }
})(jQuery);

$(document).ready(function () {
    const form = $("#feedback-form");
    form.on('submit', event => {
        event.preventDefault();

        form.find("input[type=submit]").prop("disabled", true);
        let db = firebase.firestore();
        const formData = form.getFormData();
        db.collection("feedback").add({
            name: formData.name,
            email: formData.email,
            role: formData.role,
            message: formData.message
        }).then(function (docRef) {
            alert("Feedback submitted, thank you!");
            form.trigger('reset');
            form.find("input[type=submit]").prop("disabled", false);
        }).catch(function (error) {
            alert("An error occurred when trying to submit the feedback: " + error);
            form.trigger('reset');
            form.find("input[type=submit]").prop("disabled", false);
        });
    });
});
