package com.cmslistadmin.content_list_crud;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cmslistadmin.content_list_crud.business.FilesListing;
import com.cmslistadmin.content_list_crud.business.FilesListingJSON;
import com.cmslistadmin.content_list_crud.business.ImageList;
import com.cmslistadmin.content_list_crud.business.ImageListJSON;
import com.cmslistadmin.content_list_crud.business.NewImageListJSON;
import org.springframework.web.bind.annotation.RequestBody;
import  org.springframework.util.MimeType ;
import org.springframework.http.MediaType ;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ImageListCRUD {
    /* http://localhost:4200/view/shree-ganesh-gte-q1-2023
     * Adding the image file to the suitable image folder after rename and inserting the JSON into 
     * For now, we will pass stringified JSON
     */
    String websiteRoot = "/Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/" ;
    interface newEntryAllDetail {
        String sourceFile="";
        String destinationFile="";

    }
    /* To get the proof of concept basic functionalitu up and running
     * June 16 2023
     */
    @RequestMapping(method = RequestMethod.GET, path = "/filename-list")
    public String getListName() {
        return "fdsfseresw";
    }
    /* will change to PUT or POST method once I have the UI in place */
    @PutMapping(path="/update-list")
    public String updateList() // @RequestBody newEntryAllDetail fileDetails = null, )
    {
        return "done";
    }
    @PostMapping( path = "/processImage" , produces = MediaType.APPLICATION_JSON_VALUE)
    public String[]  processImage(@RequestBody ImageListJSON imageDetails) {
        ImageList imageDetail = new ImageList();
        System.out.printf(imageDetails.listFileToUpdate);
        return imageDetail.processImage(imageDetails);
      //  return  "yes"; //updateImageJSON.processImage(entity);
    }
    @RequestMapping(method = RequestMethod.GET, path = "/filename2")
    public String updateListts() {
         System.out.println("THANGSMALI");
         String[] sampleJSON = new String[] 
        {     "{",
            "fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-final-GudiPadwa-March22-2023.jpeg`,",
            "description: `Ganapati - Gudi Padwa 02/22/2023. <br/>",
                         "final version - photo edited",
                         "<p>A first of sorts - I have begun drawing flowers and chanced upon a theme of surrounding the main sketch with these</p>",
                          "<p> probably do others e.g. use dolphins around a sailing ship sketch`,",
                         "dateUploaded: '06-15-2023',",
                         "canvassSize: 'A4', content:'color-pencil',",
                         "rating: 1,",
                         "ratingYear:2023,",
                         
                "},"
        }   ;
        String fileToUpdate = this.websiteRoot + "/src/assets/data-and-config/data/ganesh-gte-q1-2023.image.list.ts" ;
        ImageList updateImageJSON = new ImageList() ;
        updateImageJSON.AddListItem(fileToUpdate, sampleJSON,"'shree-ganesh-gte-q4-2021',");
        return "s-ganesh-list.ts";
    }
   
    
     @PostMapping( path = "/update-list" , produces = MediaType.APPLICATION_JSON_VALUE)
     public String  processImage(@RequestBody NewImageListJSON newImageList) {
         System.out.printf("%s %s \n", newImageList.fileToUpdate, newImageList.stringsToAdd[0]);
         /* 
         String[] sampleJSON = new String[] 
        {     "{",
            "fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-final-GudiPadwa-March22-2023.jpeg`,",
            "description: `Ganapati - Gudi Padwa 02/22/2023. <br/>",
                         "final version - photo edited",
                         "<p>A first of sorts - I have begun drawing flowers and chanced upon a theme of surrounding the main sketch with these</p>",
                          "<p> probably do others e.g. use dolphins around a sailing ship sketch`,",
                         "dateUploaded: '06-15-2023',",
                         "canvassSize: 'A4', content:'color-pencil',",
                         "rating: 1,",
                         "ratingYear:2023,",
                         
                "},"
        }   ;
        String fileToUpdate = this.websiteRoot + "/src/assets/data-and-config/data/ganesh-gte-q1-2023.image.list.ts" ;
        */
        ImageList updateImageJSON = new ImageList() ;
        updateImageJSON.AddListItem(newImageList.fileToUpdate, newImageList.stringsToAdd,"'shree-ganesh-gte-q4-2021',");
        return "s-ganesh-list.ts";
    }
    @PostMapping("/move" )
    public String  moveFiles(@RequestBody String[] entity) {
        ImageList updateImageJSON = new ImageList(entity) ;
        updateImageJSON.processImage(entity);
        
        return  "yes"; //updateImageJSON.processImage(entity);
    }
}
