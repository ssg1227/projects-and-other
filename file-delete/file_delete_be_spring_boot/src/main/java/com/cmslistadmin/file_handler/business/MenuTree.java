package com.cmslistadmin.content_list_crud.business;
// package com.cmslistadmin.content_list_services;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedReader; 
import java.io.BufferedWriter; 
import java.io.IOException;
import java.util.ArrayList;
import java.util.regex.Matcher; 
import java.util.regex.Pattern; 
public class MenuTree {
    MenuTreeFields menuTreeFields = new MenuTreeFields();
    public MenuTree() {

    }
    public MenuTreeFields getRecord() {
        return this.menuTreeFields;
    }
    public String getLabel() {
        return  menuTreeFields.label ;
    }
    public  void processMenuTree(String menuTreeName, String category, String parentCategory,String newDate ) {
        System.out.println("Read and Menu Tree reached");
        
        ArrayList<String> processedLines = readAndEditMenuTree( menuTreeName,  category,  parentCategory, newDate);
        updateMenuTree(menuTreeName, processedLines);
    }
    public static ArrayList<String> readAndEditMenuTree(String menuTreeName, String category, String parentCategory,String newDate ) {
        BufferedReader menuTreeReader ; 
        String line = "";
        ArrayList<String> lines = new ArrayList<String>();
        Pattern findMenuTreePattern = Pattern.compile("\\d{2}-\\d{2}-\\d{4}" );
        try {
            menuTreeReader = new BufferedReader(new  FileReader(menuTreeName));
             while ((line = menuTreeReader.readLine()) != null) {
                if (line.contains(category) && line.contains(parentCategory))
                {
                    Matcher findMenuTreeMatch = findMenuTreePattern.matcher(line) ;
                    if (findMenuTreeMatch.find()) {
                        line = findMenuTreeMatch.replaceFirst(newDate);
                        lines.add(String.format("%s\n",line));
                    }
                } else {
                    lines.add(String.format("%s\n",line));
                    
                }
               
            }
            menuTreeReader.close();
 
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        return lines ;
    }
    public static void updateMenuTree(String menuTreeName, ArrayList<String> processedLines) {
        BufferedWriter menuTreeWriter = null ;
        try {
            menuTreeWriter =  new BufferedWriter(new FileWriter(menuTreeName)); 
            for (String processedLine: processedLines) {

                try {
                     menuTreeWriter.write(processedLine) ;
                } catch (IOException e) {
                    e.printStackTrace();
                    return ;
                }
            }
        
            menuTreeWriter.flush(); 
        }catch (IOException ioe) {
            ioe.printStackTrace();
         }
         finally
         { 
            try{
               if(menuTreeWriter!=null)
              
            menuTreeWriter.close();
            }catch(Exception ex){
                System.out.println("Error in closing the BufferedWriter"+ex);
             }
         }
    }
  
    /*
     * 
export interface MenuItem {
    uniqueKey: string;
    parentKey: string;
    parent?: boolean;// also use for expand
    child: boolean
    key: string;
    label: string;
    roles: string[]; // unused for now ;
    children?: MenuItem[];
    dateUploaded?: string;
    tab:string;
};
     */
}
