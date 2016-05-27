(function ($) {
  
  //declare JSON Object with IDBdoc IDSs
  var pathLevelDocs = {
    "businessLeader" : {
      "A": 'EZSHARE-268124817-1141',
      "B": 'EZSHARE-268124817-1139',
      "C": 'EZSHARE-268124817-1140'
    },
    "budget": {
      "B" : 'EZSHARE-268124817-1145',
      "C" : 'EZSHARE-268124817-1142',
      "D" : 'EZSHARE-268124817-1143',
      "E" : 'EZSHARE-268124817-1144'
    },
    
    "marketing": {
      "B" : '	EZSHARE-268124817-1150',
      "C" : 'EZSHARE-268124817-1151',
      "D" : 'EZSHARE-268124817-1148',
      "E" : 'EZSHARE-268124817-1149'
    },
    
    "devEffectiveness" : {
      "B" : 'EZSHARE-268124817-1154',
      "C" : 'EZSHARE-268124817-1155',
      "D" : 'EZSHARE-268124817-1152',
      "E" : 'EZSHARE-268124817-1153'
    },
    
    "envSocial": {
      "B" : 'EZSHARE-268124817-1159',
      "C" : 'EZSHARE-268124817-1156',
      "D" : 'EZSHARE-268124817-1157',
      "E" : 'EZSHARE-268124817-1158'
    },
    
    "IT": {
      "B" : 'EZSHARE-268124817-1162',
      "C" : 'EZSHARE-268124817-1163',
      "D" : 'EZSHARE-268124817-1160',
      "E" : 'EZSHARE-268124817-1161'
    },
    
    "investment": {
      "B" : 'EZSHARE-268124817-1166',
      "C" : 'EZSHARE-268124817-1167',
      "D" : 'EZSHARE-268124817-1164',
      "E" : 'EZSHARE-268124817-1165'
    },
    
    "legal": {
      "B" : 'EZSHARE-268124817-1170',
      "C" : 'EZSHARE-268124817-1171',
      "D" : 'EZSHARE-268124817-1168',
      "E" : 'EZSHARE-268124817-1169'
    },
    
    "portfolioMgmt": {
      "B" : 'EZSHARE-268124817-1174',
      "C" : 'EZSHARE-268124817-1175',
      "D" : 'EZSHARE-268124817-1172',
      "E" : 'EZSHARE-268124817-1173'
    },
    
    "resPlanning": {
      "B" : 'EZSHARE-268124817-1178',
      "C" : 'EZSHARE-268124817-1179',
      "D" : 'EZSHARE-268124817-1176',
      "E" : 'EZSHARE-268124817-1177'
    },
    
    "riskMgmt" : {
      "B" : 'EZSHARE-268124817-1182',
      "C" : 'EZSHARE-268124817-1183',
      "D" : 'EZSHARE-268124817-1180',
      "E" : 'EZSHARE-268124817-1181'
    },
    
    "strategy": {
      "B" : 'EZSHARE-268124817-1186',
      "C" : 'EZSHARE-268124817-1187',
      "D" : 'EZSHARE-268124817-1184',
      "E" : 'EZSHARE-268124817-1185'
    },
    "treasury": {
      "B" : 'EZSHARE-268124817-1191',
      "C" : 'EZSHARE-268124817-1188',
      "D" : 'EZSHARE-268124817-1189',
      "E" : 'EZSHARE-268124817-1190'
    },
    
    "businessSupport": {
      "F" : 'EZSHARE-268124817-1146',
      "G" : 'EZSHARE-268124817-1147'
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
    
    https://idbg.sharepoint.com/teams/IICCorporate/administrative management/_layouts/15/DocIdRedir.aspx?ID=
    
    var baseURL = "https://idbg.sharepoint.com/teams/IICCorporate/administrative management/_layouts/15/DocIdRedir.aspx?ID=";
    
    
    //loop over visible buttons and set their href values
    $.each(level, function (index, value) {
       
        level[index].href = baseURL + docIDs[index];

    });
    
    
    
    
  });
  
})(jQuery);
