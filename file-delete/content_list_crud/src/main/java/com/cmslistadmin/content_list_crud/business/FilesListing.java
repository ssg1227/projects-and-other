package com.cmslistadmin.content_list_crud.business;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.amqp.ConnectionFactoryCustomizer; 

public class FilesListing {
    public String[] getFileListing(String folderName) {
        String[] fileNames = null ;
            
        File folderToList = new File(folderName) ;
        File contentsFile[] = folderToList.listFiles();
        if (contentsFile != null && contentsFile.length > 0 ){
            int k = contentsFile.length;
            fileNames = new String[k];
            for (int i = 0 ; i < contentsFile.length; i++)
            {
                if (contentsFile[i].isDirectory()) {
                    fileNames[i] =   contentsFile[i].getName();
                } else {
                    fileNames[i] =   "(file)" + contentsFile[i].getName();
                    
                }
            }
        } 
        return fileNames ;
    }
    public boolean moveFile(String sourcePath,String targetPath, String sourceFileName, String destFileName ) {
        if (destFileName == "") {
            destFileName = sourceFileName ;
        }
        System.out.printf("%s\n/Users/shantanu/Downloads/Sketch-transit-test/GaneshDec72023.jpeg   ",sourcePath + "/" + sourceFileName);
        System.out.printf("%s\n/Users/shantanu/Documents/GitHub/ssg1227-GuruDatta-9-test/cms-code/customized-cms/cms-main//src/assets/gallery-files/images//religion/aumkar-shree-ganesh/gte-q1-2023/GaneshDec72023.jpeg   TO \n",targetPath + "/" + destFileName);
         File fileToMove = new File(sourcePath + "/" + sourceFileName);
         // File fileToMove = new File("/Users/shantanu/Downloads/Sketch-transit-test/GaneshDec72023.jpeg") ;
      /* boolean fileMoved = fileToMove.renameTo(new File(targetPath + "/" + destFileName));*/
       // boolean fileMoved = fileToMove.renameTo(new File( "//Users/shantanu/Documents/" + destFileName));
       boolean fileMoved = false ;
       try {
        fileMoved = fileToMove.renameTo(new File(targetPath + "/" + destFileName));
        // fileMoved = fileToMove.renameTo(new File("/Users/shantanu/Documents/GitHub/ssg1227-GuruDatta-9-test/cms-code/customized-cms/cms-main//src/assets/gallery-files/images//religion/aumkar-shree-ganesh/gte-q1-2023/GaneshDec72023.jpeg") );
     }
    catch(Exception e) {
      //  Block of code to handle errors
      System.out.println(e.getMessage()); 
      e.printStackTrace();
      System.out.printf("error %s\n", e.getMessage());
    }
     
        
        return fileMoved;
    }
    public boolean copyFile( String sourceFileName, String destFileName ) {
         
       
        boolean fileCopied = false ;
       try {
        Path sourceFile = Paths.get(sourceFileName);
        Path targetFile = Paths.get(destFileName);
        Files.copy(sourceFile, targetFile, StandardCopyOption.REPLACE_EXISTING) ;
        fileCopied = true ;
        // fileMoved = fileToMove.renameTo(new File("/Users/shantanu/Documents/GitHub/ssg1227-GuruDatta-9-test/cms-code/customized-cms/cms-main//src/assets/gallery-files/images//religion/aumkar-shree-ganesh/gte-q1-2023/GaneshDec72023.jpeg") );
     }
    catch(IOException e) {
      //  Block of code to handle errors
      System.out.println(e.getMessage()); 
      e.printStackTrace();
      System.out.printf("error %s\n", e.getMessage());
    }
     
    System.out.printf("copy %s, %s\n",sourceFileName, destFileName );
        return fileCopied;
    }

    public boolean moveFileTest(String sourcePath,String targetPath, String sourceFileName, String destFileName ) {
        if (destFileName == "") {
            destFileName = "/Users/shantanu/Documents/test2/EDunsigned4NarasimhaSaraswatiJan152021.png";// sourceFileName ;
        }
        destFileName = "/Users/shantanu/Documents/test2/GuruInBayArea051024.jpeg";// sourceFileName ;
        
        File fileToMove = new File("/Users/shantanu/Documents/test1/GuruInBayAreaWithGanesh051024.jpeg"); // sourcePath + "/" + sourceFileName);
       
      /* boolean fileMoved = fileToMove.renameTo(new File(targetPath + "/" + destFileName));*/
       // boolean fileMoved = fileToMove.renameTo(new File( "//Users/shantanu/Documents/" + destFileName));
       boolean fileMoved = false ;
       try {
        fileMoved = fileToMove.renameTo(new File( destFileName));
        System.out.printf("%s XXXXX %s YYYYY %s %s", sourcePath, targetPath, sourceFileName,destFileName);
    }
    catch(Exception e) {
      //  Block of code to handle errors
      System.out.println(e.getMessage()); 
      e.printStackTrace();
    }
       System.out.printf("%s XXXXX %s YYYYY %s %s", sourcePath, targetPath, sourceFileName,destFileName);
        
        return fileMoved;
    }
    public boolean writeLines(String[] fileAndLines){
        String fileName = fileAndLines[0];
        ArrayList<String> fileLines = new ArrayList<String>();
        for (int i = 1; i < fileAndLines.length ;i++) {
            fileLines.add(fileAndLines[i]);
        }
        FileHandler.addLinestoFile(fileName, fileLines, -1);
        return true ;
    }
    public boolean createFolder(String folderPath){
        File directory = new File(folderPath);
        System.out.println(folderPath);
        // Create the directory
        if (!directory.exists()) {
            boolean created = directory.mkdirs(); // Use mkdir() for single directory, mkdirs() for multiple levels
            if (created) {
                System.out.println("Directory created successfully.");
            } else {
                System.out.println("Failed to create the directory.");
            }
        } else {
            System.out.println("Directory already exists.");
        }
        return true ;
    }
    public boolean createFile(String filePath){
        File newFile = new File(filePath);
        System.out.printf(" Creating %s\n", filePath);
        boolean created = true ;
        // Create the directory
        if (newFile.exists()) 
        {
            System.out.println("File exists");
            return false ;
        } else {
            try {
                // Create the file
                if (newFile.createNewFile()) {
                    System.out.println("File created successfully.");
                    
                } else {
                    System.out.println("File already exists.");
                    created = false ;
                }
            } catch (Exception e) {
                System.out.println("An error occurred while creating the file.");
                e.printStackTrace();
                created = false ;
            }
        }
        return created ;
    }
    // added for  NEW-CATEGORY-REFINE-11-2024, but will fine its use elsewhere also
    
    public static  ArrayList<String>  addMenuTreeEntry(String filePath, String comment, List<String> linesToInsert)  {
        // Read all lines from the file
        BufferedReader listFileReader ; 
        
        String line = "";
        ArrayList<String> lines = new ArrayList<String>();
        // List to store the modified content
        try {
            listFileReader = new BufferedReader(new FileReader(filePath));
            while ((line = listFileReader.readLine()) != null) {
                lines.add(String.format("%s\n",line));
                if(line.indexOf(comment)>=0){
                    for(String lineToInsert: linesToInsert){
                        lines.add(String.format("%s\n",lineToInsert));
                    }
                }
            }
            listFileReader.close();
            
        } catch (Exception e) {
            e.printStackTrace();
            return null;
             
        }

        return lines ;
    }
    public static void updateListFile(String fileToUpdate, ArrayList<String> processedLines) {
        BufferedWriter listFileWriter = null ;
        try {
            listFileWriter =  new BufferedWriter(new FileWriter(fileToUpdate)); 
        
        
         //   String nfileToUpdate = "/Users/shantanu/Documents/GitHub/fullstack/spring-boot/shan-cms-maintain/content_list_crud/src/main/java/com/cmslistadmin/content_list_crud/business/test-data/shree-ganesh-gte-q1-2023.image.list.ts" ;
         //   listFileWriter =  new BufferedWriter(new FileWriter(nfileToUpdate)); 
         System.out.printf("%d %s \n",processedLines.size());
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
/* 
    public  void insertAfterCommentBrokenß(String filePath, String comment, List<String> linesToInsert){ // throws IOException {
        // Read all lines from the file
        List<String> fileLines = Files.readAllLines(Paths.get(filePath));
        
        // List to store the modified content
        List<String> modifiedLines = new ArrayList<>();
        
        // Flag to indicate when to start inserting lines
        boolean insertAfter = false;

        // Iterate through the file lines
        for (String line : fileLines) {
            modifiedLines.add(line); // Add the current line to the modified list
            
            // If the comment is found, set the flag to start inserting lines
            if (line.trim().equals(comment)) {
                insertAfter = true;
            }

            // If flag is true, insert the lines and then reset the flag
            if (insertAfter) {
                modifiedLines.addAll(linesToInsert);  // Insert new lines
                insertAfter = false;  // Only insert once after the comment
            }
        }

        // Write the modified content back to the file
        Files.write(Paths.get(filePath), modifiedLines, StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
    }
*/
}
