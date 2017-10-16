
dos.app.home = dos.app.home ||
{
    init : function()
    {
        this.HideErrors();
        this.InitCarousel();
        this.InitAddButton();
    },
    HideErrors : function()
    {
        $("#errorContainer").hide();
    },
    ShowError : function(errorMessage)
    {
        $("#errorContainer").show();
        $("#lblError").text(errorMessage);
    },
    // the LoadJson function not playing well with mime types
    // InitCarousel : function()
    // {
    //    // dos.app.common.LoadJSON(function (response)
    //     {
    //         if (response === "error")
    //         {
    //             dos.app.home.ShowError("Slide data is not available.")
    //             return;
    //         }
    //         var appData = JSON.parse(response);
    //         if(!appData)
    //         {
    //             dos.app.home.ShowError("Slide Data was not available.")
    //             return;
    //         }
    //         var i = 0;
    //         appData.Carousel.forEach(function(slideData)
    //         {                
    //             dos.app.home.AddSlide(i==0,slideData);        
    //             i++;
    //          }, this);
    //     });

        
    // },
    InitCarousel : function()
    {
        $.getJSON(dos.app.common.GetJsonPath(),function(appData)
        {           
            if(!appData)
            {
                dos.app.home.ShowError("Slide Data was not available.")
                return;
            }
            var i = 0;
            appData.Carousel.forEach(function(slideData)
            {                
                dos.app.home.AddSlide(i==0,slideData);        
                i++;
             }, this);
        });  
    },
    InitAddButton : function()
    {
        $("#btnAdd").click( function() {
            var inputText = $("#txtSlide").val();
            if (inputText === "")
            {
                ShowError("Please enter text to add to the slide");
                return;
            }
            
            $(".carousel-item.active").removeClass("active");
            dos.app.home.AddSlide(true,inputText);
            dos.app.home.HideErrors();
          });
    },
    AddSlide : function(isActive,slideText)
    {
        var activeCss = (isActive) ? "active" : "";
        var slideHtml = "<div class='carousel-item "+activeCss+ "'>";
        slideHtml+= "<div class='carouselInnerDiv'>";
        slideHtml+= slideText;
        slideHtml+= "</div></div>";
        $("#carouselInner").append(slideHtml);
    }
}