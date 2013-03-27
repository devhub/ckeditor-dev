/**
 * @license Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

var CKBUILDER_CONFIG = {
	skin: 'moono',
  preset: 'basic',
	ignore: [
		'dev',
		'README.md',
		'.gitignore',
		'.gitattributes',
		'.mailmap',
		'.idea'
	],
	plugins: {
    basicstyles: 1, // Basic formatting commands: Bold Italic Underline .....
		clipboard: 1, // Handles cut/copy/paste
		colorbutton: 1, // Font color and background-color text formatting
		colordialog: 1, // Dialog with a table of colors
		contextmenu: 1, // Provides editor's context menu
		enterkey: 1, // Line breaking behavior in all different contexts
		entities: 1, // Escapes HTML entities in the output
		filebrowser: 1,
		floatingspace: 1, // Used by inline
		font: 1, // Font size and family
		htmlwriter: 1, // Provides flexible HTML output
		indent: 1, // Required by enter key
		justify: 1,
		link: 1,
		list: 1,
		resize: 1, // Allows column resize
		sourcearea: 1,
		table: 1,
		tabletools: 1,
		toolbar: 1,
		undo: 1,
		wysiwygarea: 1,
		//a11yhelp: 1,  // Accessibility help
		//about: 1, // About CKEditor
		//bidi: 1, // Make possible to change text-direction
		//blockquote: 1, // Block-level quotation
		//div: 1,// Adds the command to allow groups content blocks under a div
		//elementspath: 1, // Bottom element path
		//find: 1, // Find replace dialog
		//flash: 1, // Add flash
		//format: 1, // Apply block level format styles
		//forms: 1, // Add forms
		horizontalrule: 1, // Add an <hr>
		//iframe: 1, // Igrame dialog
		//image: 1, // Image dialog not included because we use ours
		//liststyle: 1,
		//magicline: 1, // Red line to insert
		//maximize: 1, // Maximize editor insize browser window
		//newpage: 1, // Adds toolbar button which clears editing area and creates a new page
		//pagebreak: 1, // Inserts horizontal page breaks
		pastefromword: 1, // Paste from word
		pastetext: 1, // Allows to always paste as plain text
		//preview: 1, // Displays preview of the documentj
		//print: 1,
		removeformat: 1 // Toolbar button to remobe all text styling
		//save: 1,  // Saves contents and sends to server
		//selectall: 1, // Button to select contents of editor
		//showblocks: 1, // Allows visualization of block level elements
		//showborders: 1, // Shows table borders
		//smiley: 1,
		//specialchar: 1, // Special character palette
		//stylescombo: 1, // Rich combo on toolbar that opens with a list of styles
		//tab: 1, // Tab behavior for tables
		//templates: 1,
	}
  //languages: {
  //  'es': 1,
  //  'en': 1
  //},
};
