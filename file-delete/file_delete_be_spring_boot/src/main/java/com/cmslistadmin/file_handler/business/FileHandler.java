package com.cmslistadmin.file_handler.business;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class FileHandler {
    public static void addLinestoFile(String fileToUpdate, ArrayList<String> processedLines, int insertLine) {
         BufferedWriter listFileWriter = null ;
        try {
         //   String nfileToUpdate = "/Users/shantanu/Documents/GitHub/fullstack/spring-boot/shan-cms-maintain/content_list_crud/src/main/java/com/cmslistadmin/content_list_crud/business/test-data/shree-ganesh-gte-q1-2023.image.list.ts" ;
         //   listFileWriter =  new BufferedWriter(new FileWriter(nfileToUpdate)); 
            listFileWriter =  new BufferedWriter(new FileWriter(fileToUpdate,true)); 
            for (String processedLine: processedLines) {

                try {
                     listFileWriter.write(processedLine) ;
                     listFileWriter.write("\n") ;
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
