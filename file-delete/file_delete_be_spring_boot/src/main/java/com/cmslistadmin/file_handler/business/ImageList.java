package com.cmslistadmin.content_list_crud.business;

/*  will download and install the jar files for JSON string conversion soon - June 16 2023
import org.json.JSONException;
import org.json.JSONObject;
*/
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedReader; 
import java.io.BufferedWriter; 
import java.io.IOException;
import java.util.ArrayList;

public class ImageList {
    ImageListJSON upload ;
    public ImageList() {

    }
    public ImageList(ImageListJSON entity) {
        this.upload = entity ;
    }
    public ImageList(String[] entity) {
        System.out.printf(entity[0]) ;
    }
    /*
     * Utility to add an item to the list item
     * At this point, June 16 2023 and maybe always, file content updates will be string manipulation
     * 1. The consumer will send a list of strings or stringified JSON
     * 2. Either ways, (again, at this point) the new content will be passed, as above, to this function
     * 3. Down the line may download a JSON-string back and forth convertor but not now
     */
    public String[] processImage(ImageListJSON entity) {
        ArrayList<String> imageJSONStrings = new ArrayList<String>();
        ArrayList<String> imageJSONFileIterations = new ArrayList<String>();
        imageJSONStrings.add("{") ;
        if (entity.fullFileNames != null && entity.fullFileNames.length > 0) {
            // ImageListJSON - figure out how to use an interface to group filename and interface
            imageJSONStrings.add("fullFileName: " + entity.fullFileNames[0]) ;
            imageJSONStrings.add("descriptiom: " + entity.fileDescriptions[0]) ;
            // `assets/all-images/religion/dattavatar/SwamiDattaOc62022.jpeg`, 
         //   if (entity.iterations.lebgth)
        }
        imageJSONStrings.add("},") ;
        /* 
         interface FileAndDesc {
        String fullFileName ="";
        String description ="";
    }
    String listFileToUpdate;

    String imageCanvassSize ;
    String imageSketchType;
    FileAndDesc[] iterations[];

    String evolution;
    String evolutionDate ;
    String evolutionSequence;
    String dateUploaded ;
    String rating;
    String  ratingYear;
    
         * fullFileName: `assets/all-images/religion/dattavatar/SwamiDattaOc62022.jpeg`, 
            description: 
            `<ul>
                <li>Taking my time in sketching, needed to draw a really well made sketch of Shre Swami Samartha</li>
                <li>From a picture with Lord Dattatreya in the background, started around end September and completed Oct 6 2022</li>
                 </ul>`,
                dateUploaded: '11-17-2022',
                iterations:[  {
                    fullFileName: `assets/all-images/religion/dattavatar/SwamiDattaOc62022.jpeg`, 
                    description: `<ul>
                    <li>Taking my time in sketching, needed to draw a really well made sketch of Shre Swami Samartha</li>
                    <li>From a picture with Lord Dattatreya in the background, started around end September and completed Oct 6 2022</li>
                     </ul>`} ,{ fullFileName: `assets/all-images/religion/dattavatar/SwamiDattaOct12022.jpeg`, 
                     description: `<ul>
                     <li>Initial checkpoint - Swami and Datta in place</li>
                      </ul>`} 
                ],
                rating:1 ,
         */
        String[] imageDetailArr = new String[imageJSONStrings.size()];
        return  imageJSONStrings.toArray(imageDetailArr);
    }
     public String processImage(String[] entity) {
        String source = entity[0] + "/" + entity[2];
        String target = entity[1] + "/" + entity[2]; ;
        
        System.out.printf("%s XXXXX %s", source, target);
       // this.moveFile(source, target);
        this.moveFile(  target, source);
        return "test";
    }
    boolean moveFile(String sourcePath,String targetPath ) {
        File fileToMove = new File(sourcePath);
        System.out.printf("%s XXXXX %s YYYYY", sourcePath, targetPath);
        boolean fileMoved = fileToMove.renameTo(new File(targetPath));
    
        return fileMoved;
    }
  
    public void AddListItem(String fileToUpdate, String[] stringifiedJSON , String folderName) {
        String keyValues[][]=  {
            {"public","allImageList:","ImageElement[]"},
         /* *    {"folder:", folderName },
            {"themeSummary:"},
            {""},*/
            { "files:", "["}
        };
        ImageListFields[] patterns = new ImageListFields[5];
        for (int i = 0; i < keyValues.length;i++) {
            patterns[i] = new ImageListFields( 
            );
            patterns[i].linePattern = keyValues[i];
            patterns[i].allMatch = true;
        }

        ArrayList<String> processedLines = ImageList.readAndEditListFile(fileToUpdate, patterns, keyValues, stringifiedJSON);
        System.out.println(processedLines.size());
        ImageList.updateListFile(fileToUpdate,processedLines);
       /* until the JSON-string back and forth convertor solution is found, the insertion would be based on cascading search success of
          sequential lines. We may have to add validations later but not now
        */
    }
    public static ArrayList<String> readAndEditListFile(String fileToUpdate, ImageListFields[] patterns, String[][] keyValues, String... stringifiedJSON  ) {
        BufferedReader listFileReader ; 
        String line = "";
        boolean matchAll = true ;
        int patternsFound=0;
        ArrayList<String> lines = new ArrayList<String>();
         try {
            listFileReader = new BufferedReader(new  FileReader(fileToUpdate));
             while ((line = listFileReader.readLine()) != null) {
                 lines.add(String.format("%s\n",line));
                    if (patternsFound < keyValues.length) {
                    for (int k = 0; k < keyValues[patternsFound].length; k++) {
                        if (line.indexOf(patterns[patternsFound].linePattern[k]) <0) {
                                    matchAll = false ;
                        }
                    }
                    if (matchAll == true) {
                        patternsFound++;
                    }
                    matchAll = true ;// reset
                    if (patternsFound == keyValues.length) {
                            for (int p = 0; p < stringifiedJSON.length;p++) {
                                lines.add(String.format("%s\n",stringifiedJSON[p]));
                            }
                    }
                }
                 /* revisit - we dont need that elaborate song and date data structure
                   and this logic
                if (patternsFound < patterns.length) { 
                        for (int k = 0; k < patterns[patternsFound].linePattern.length; k++) {
                            if (line.indexOf(patterns[patternsFound].linePattern[k]) <0) {
                                patterns[patternsFound].allMatch = false ;
                            }
                        }
                        if (patterns[patternsFound].allMatch == true) {
                            patternsFound++ ;
                        }
                    } else {
                        for (int p = 0; p < stringifiedJSON.length;p++) {
                            lines.add(String.format("%s\n",stringifiedJSON[p]));
                        }
                    }
                */
                   
                                
            }
            listFileReader.close();
 
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        return lines ;
    }
    public static void updateListFile(String fileToUpdate, ArrayList<String> processedLines) {
        BufferedWriter listFileWriter = null ;
        try {
         //   String nfileToUpdate = "/Users/shantanu/Documents/GitHub/fullstack/spring-boot/shan-cms-maintain/content_list_crud/src/main/java/com/cmslistadmin/content_list_crud/business/test-data/shree-ganesh-gte-q1-2023.image.list.ts" ;
         //   listFileWriter =  new BufferedWriter(new FileWriter(nfileToUpdate)); 
            listFileWriter =  new BufferedWriter(new FileWriter(fileToUpdate)); 
            for (String processedLine: processedLines) {

                try {
                     listFileWriter.write(processedLine) ;
                } catch (IOException e) {
                    e.printStackTrace();
                    return ;
                }
            }
        
            listFileWriter.flush(); 
        }catch (IOException ioe) {
            ioe.printStackTrace();
         }
         finally
         { 
            try{
               if(listFileWriter!=null)
              
            listFileWriter.close();
            }catch(Exception ex){
                System.out.println("Error in closing the BufferedWriter"+ex);
             }
         }
    }
  
}
