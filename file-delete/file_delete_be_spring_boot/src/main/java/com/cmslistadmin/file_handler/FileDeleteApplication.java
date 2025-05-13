/* SHANTANU TRAINING DEVELOPMENT FOR PERSONAL PROJECTS (STDFPP)
 * ============================================================
 * Application to add automation to updating the content of the 'content-management-system' CMS
 * 
 * Main Application - contextual functionality
 * ===========================================
 * 1 'content-management-system' is the angular web application written by me to upload, host and display my sketches
 * 2. It is currently (as of June 10 2023) a 'no-database' CMS application
 * 3. Raw data - images - is stored in a folder hierarchy under the assets folder of the angular app
 * 4. These images are stored in folders named specific to the their theme. 
 *    e.g. a sketch of the GG bridge would go under a folder called 'places. scenes, objects'
 * 5. The image file names including relative path, details and other demographics are stored in different arrays of JSON objects
 * 6. These Arrays are stored in data lists - typescript files, as , imported into the relevant component file and subsequently rendered
 *    (These typescript files content is exposed and exported as a class with a contexy relevant name)
 * 7. A list of the different themes including special lists is maintained; here the date uploaded is updated for that theme reference in this list.
 * 8. The source is saved, built and published to Google firebase (as on June 10, 2023)
 * 
 * Purpose of the Maintenance App +
 * ==============================
 * a. Automation of the data maintenance process explained with context to my sketches
 * b. Typical data process steps:
 * b. i.   When the sketch is ready, it is scanned or photographed into a jpeg which is ultimately saved into the downloads folder
 * b. ii.  This downloaded image file is appropriately named (theme and date) and then moved to the appropriate folder as per the above(Point 4.)
 * b. iii. Information on the sketch - image name with relative path, and other demographics like description, rating, date compleyed and uploaded is 
 *         entered as a JSON object into the corresponding data list file (manifest -??) as per 5. and 6. above 
 * b. iv.  The list specified in 8.above is updated
 * b. v.   PERIODICALLY a new theme is generated - this involves adding a new data list, a new image folder, new entry in the index list and also 
 *         importing and refering the new list in the service class
 * c. THE INTENT OF THIS APP IS TO AUTOMATE THIS PROCESS
 * + This webservice is the functional backend, also as of June 10 2023, a dB free layer and will be integrated into the 
 *   Front End (mostly an Angular App) when that is ready
 * 
 * Components/Categories
 * Each will mostly follow a pattern of a <category>CRUD.java, and a <category>.java file 
  	+ optionally,  one or more <category>JSON.java files.
 * Note: Separation of concerns is (also) because besides a layer to expose the API through REST, INTERNALLU
 * some of the <category>.java objects would need to call one another
 * Files and Listings - FilesListingCRUD.java, FilesListing.java
 * Images and entries in CMS ImageListCRUD.java, ImageList.java, ImageListJSON.java
 * MenuTree - MenuTreeCRUD.java
 * June 20-23 2023
 * Successful full stack implementation of moving file from 'Downloads' to a folder under 'all-images'.
 * Hard coded
 * - Shantanu Gadkari
 */
///Users/shantanu/Documents/GitHub/java/utilities/cms-maint/ContentUpdate.java
package com.cmslistadmin.file_handler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FileDeleteApplication {

	public static void main(String[] args) {
		SpringApplication.run(FileDeleteApplication.class, args);
	}

}
