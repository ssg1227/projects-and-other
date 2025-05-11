package com.cmslistadmin.content_list_crud;
// import com.cmslistadmin.content_list_services.MenuTree; 

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cmslistadmin.content_list_crud.business.MenuTree;
import com.cmslistadmin.content_list_crud.business.MenuTreeFields;

@RestController
public class MenuTreeCRUD {

    @RequestMapping(method = RequestMethod.GET, path =  "/menu-stats")
    public String getMenuTreeStats() {
        // MenuTree a = new MenuTree() ;
        return "Menu Tree.ts recs";
    }
    @RequestMapping(method = RequestMethod.GET, path =  "/menu-label")
    public String getMenuLabel() {
         MenuTree a = new MenuTree();
         
        return a.getLabel() ;
    }
    @RequestMapping(method = RequestMethod.GET, path =  "/menu-json")
    public MenuTreeFields getMenuJSON() {
        
         MenuTree a = new MenuTree();
         String mtFile = "/Users/shantanu/Documents/GitHub/fullstack/spring-boot/shan-cms-maintain/content_list_crud/src/main/java/com/cmslistadmin/content_list_crud/business/test-data/menu-tree.ts" ;
        // /Users/shantanu/Documents/GitHub/fullstack/spring-boot/shan-cms-maintain/content_list_crud/src/main/java/com/cmslistadmin/content_list_crud/MenuTreeCRUD.java
        a.processMenuTree(mtFile/* *"menu-tree.ts" */, "- Q1 2023 onward","Shree Ganesh","06-15-2023"); 
    
        return a.getRecord()  ;
    }
}
