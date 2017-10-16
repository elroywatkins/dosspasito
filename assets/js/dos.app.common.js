var dos = dos || {};
dos.app = dos.app || {};
dos.app.common = dos.app.common ||
{    
    Init : function()
    {
      //code needed to initialise object 
    },
    GetJsonPath : function()
    {
        //Change this to where the file is being hosted
        //                  OR
        //if hosted locally in IIS, In IIS add mime type as follows if it doesn't exist:
        //file name extension = .json
        //MIME type = application/json
        //probably need an iisreset
        return "assets/srcdata/dossauce.json";
    },
    LoadJSON : function(callback) {           
        var xobj = new XMLHttpRequest();
        //this removes dependancy on the serving mime type
        xobj.overrideMimeType("application/json");
        
        xobj.open('GET', jsonPath, true); 
        xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
                }
        };
        xobj.onerror = function()
        {
            callback("error");
        }
        //xobj.send(null);  
        callback("error");
        }

}