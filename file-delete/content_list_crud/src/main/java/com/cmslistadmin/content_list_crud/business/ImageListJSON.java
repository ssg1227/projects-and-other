package com.cmslistadmin.content_list_crud.business;
interface FileAndDesc {
        String fullFileName ="";
        String description ="";
    }
    
public class ImageListJSON {
    public String listFileToUpdate;

    public String imageCanvassSize ;
    public String imageSketchType;
    public String[] fullFileNames = null;
    public String[] fileDescriptions = null;

    public String evolution;
    public String evolutionDate ;
    public String evolutionSequence;
    public String dateUploaded ;
    public String rating;
    public String  ratingYear;
    public String  duplicate;
    public String  iteration1FullFileName1;
    public String  iteration1description1;
    public String  iteration2FullFileName1;
    public String  iteration2description1;
    public String  iteration3FullFileName1;
    public String  iteration3description1;

    
}

/*
fullFileName?:string;
       fileName?:string;
       description:string;
       categories?:string ;
       title?:string;
       iterations?:PicDescr[];
 * {/Angular_lte_4/shan-cms-template/src/assets/all-images/religion/shree-ganesh-gte-q1-2023/",
 * "destinationURL1":"assets/all-images/religion/shree-ganesh-gte-q1-2023/","imageTab1":"Ganesh",
 * "imageMenu1":"ganesh-gte-Q1-2023","imageCanvassSize":"A4","imageSketchType":"black-white","fullFileName":"","description1":"","evolution1":"ddd","evolutionDate1":"06-23-2023","evolutionSequence1":3,"dateUploaded":"06-23-2023","rating1":1,"ratingYear1":2023,"iteration1FullFileName1":"","iteration1description1":"","iteration2FullFileName1":"","iteration2description1":"","iteration3FullFileName1":"","iteration3description1":"","duplicate1":"false","imageTab2":"Ganesh","imageMenu2":"ganesh-gte-Q1-2023","imageCanvass2":"A3"}
 */