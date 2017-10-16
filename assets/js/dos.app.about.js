
dos.app.about = dos.app.about ||
{
    init : function()
    {
        this.InitAboutText();
    },    
    InitAboutText : function()
    {
        $.getJSON(dos.app.common.GetJsonPath(),function(appData)
        {
            var aboutText = "No information found in the about section";
            if ((appData) && (appData.AboutUs))
            {
                aboutText =  appData.AboutUs;
            }
            $("#lblAbout").text(aboutText);            
        });
    }
}