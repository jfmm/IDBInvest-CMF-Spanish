(function ($) {
  
  //declare JSON Object with IDBdoc IDSs
  var pathLevelDocs = {
    "businessLeader" : {
      "A": 39909392,
      "B": 39909399,
      "C": 39909404
    },
    "budget": {
      "B" : 39909806,
      "C" : 39909808,
      "D" : 39909812,
      "E" : 39909802
    },
    
    "marketing": {
      "B" : 39909818,
      "C" : 39909829,
      "D" : 39909837,
      "E" : 39909841
    },
    
    "devEffectiveness" : {
      "B" : 39909857,
      "C" : 39909861,
      "D" : 39909889,
      "E" : 39909893
    },
    
    "envSocial": {
      "B" : 39909902,
      "C" : 39909912,
      "D" : 39909917,
      "E" : 39909926
    },
    
    "IT": {
      "B" : 39909940,
      "C" : 39909950,
      "D" : 39909953,
      "E" : 39909957
    },
    
    "investment": {
      "B" : 39910344,
      "C" : 39910350,
      "D" : 39910358,
      "E" : 39910364
    },
    
    "legal": {
      "B" : 39910008,
      "C" : 39910016,
      "D" : 39910021,
      "E" : 39910041
    },
    
    "portfolioMgmt": {
      "B" : 39910179,
      "C" : 39910183,
      "D" : 39910191,
      "E" : 39910199
    },
    
    "resPlanning": {
      "B" : 39910203,
      "C" : 39910211,
      "D" : 39910216,
      "E" : 39910221
    },
    
    "riskMgmt" : {
      "B" : 39910229,
      "C" : 39910232,
      "D" : 39910260,
      "E" : 39910265
    },
    
    "strategy": {
      "B" : 39910273,
      "C" : 39910283,
      "D" : 39910289,
      "E" : 39910295
    },
    "treasury": {
      "B" : 39910314,
      "C" : 39910329,
      "D" : 39910336,
      "E" : 39910339
    },
    
    "businessSupport": {
      "G" : 39909752,
      "F" : 39909763
    }
  };
  

  var button = $(".career-path-col .cmf-info-box"); // bind to boxes under career path column only
  
  
  button.on("click", function () {
    
    var thisButton = $(this);// get button instance clicked
   
    
    /*
    * GUI Logic
    *
    */ 
    if (thisButton.data("type") === "path") {
      
      // if there's a button already selected, deselect it
      if(button.hasClass("cmf-info-box-selected")) 
          button.removeClass("cmf-info-box-selected");
      
      //then add selected class to button that was clicked
      thisButton.addClass("cmf-info-box-selected");
      
      //show sibling columns
      thisButton.parent().siblings().removeClass("cmf-col-hidden").addClass("cmf-col-visible");
      
      //hide the other work roles/grade levels
      thisButton.parent()
                .parent()
                .siblings()
                .children(".role-col") // only children with this class
                .removeClass("cmf-col-visible")
                .addClass("cmf-col-hidden");
    }
    
    
    
    
    /*
    *  Link Logic
    */
    
    var path = thisButton.data("path");
    
    //select only the level buttons that are visible
    var level = $("div.cmf-col-visible .level-btn");
    
   
    
    var docIDs = []; // stores IDB doc ids for path clicked
    
    for(prop in pathLevelDocs[path]) {
      docIDs.push(pathLevelDocs[path][prop]);
    }
    
    
    var baseURL = "http://idbdocs.iadb.org/WSDocs/getDocument.aspx?DOCNUM=";
    
    
    //loop over visible buttons and set their href values
    $.each(level, function (index, value) {
       
        level[index].href = baseURL + docIDs[index];

    });
    
    
    
    
  });
  
})(jQuery);