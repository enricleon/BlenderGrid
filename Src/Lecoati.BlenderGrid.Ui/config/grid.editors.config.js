[
	{
		"name":"antoine",
		"alias":"antoine",
		"view":"/App_Plugins/Lecoati.BlenderGrid/core/blendergrideditor.html",
		"icon":"icon-umbrella",
		"config":{
			"editors":[
				{
					"name":"Campo1",
					"alias":"campo1",
					"view":"textstring",
					"config":{
						"multiPicker":true
					}
				},
				{
					"name":"colorpicker",
					"alias":"colorpicker",
					"view":"colorpicker"
				},
				{
					"name":"Bool",
					"alias":"Bool",
					"view":"boolean"
				},
				{
					"name":"contentpicker",
					"alias":"contentpicker",
					"view":"contentpicker"
				}
			],
			"renderInGrid":true,
			"limit":10
		},
		"render":"antoine"
	},
	{
		"name":"Adresss",
		"alias":"Adresss",
		"view":"/App_Plugins/Lecoati.BlenderGrid/core/blendergrideditor.html",
		"icon":"icon-map",
		"config":{
			"renderInGrid":false,
			"fixed":true,
			"limit":5,
			"editors":[
				{
					"name":"icon",
					"alias":"icon",
					"view":"iconpicker"
				},
				{
					"name":"test",
					"alias":"test",
					"view":"textstring"
				}
			]
		}
	},
	{
		"name":"test 2",
		"alias":"test2",
		"view":"/App_Plugins/Lecoati.BlenderGrid/core/blendergrideditor.html",
		"icon":"icon-user-female",
		"config":{
			
		},
		"render":"test2"
	},
	{
		"name":"Quote",
		"alias":"quote",
		"view":"textstring",
		"icon":"icon-quote",
		"config":{
			"style":"border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-variant: italic; font-size: 18px",
			"markup":"<blockquote>#value#</blockquote>"
		}
	},
	{
		"name":"Carousel",
		"alias":"carousel",
		"view":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/BlenderGridEditor.html",
		"render":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/Views/Carousel.cshtml",
		"icon":"icon-pictures-alt-2",
		"config":{
			"limit":"10",
			"fixed":"false",
			"editors":[
				{
					"name":"Title",
					"alias":"title",
					"view":"textstring"
				},
				{
					"name":"Summary",
					"alias":"summary",
					"view":"textarea"
				},
				{
					"name":"Image",
					"alias":"image",
					"view":"mediapicker"
				},
				{
					"name":"Content",
					"alias":"content",
					"view":"contentpicker"
				}
			]
		}
	},
	{
		"name":"Thumbnail",
		"alias":"thumbnail",
		"view":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/BlenderGridEditor.html",
		"render":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/Views/Thumbnail.cshtml",
		"icon":"icon-thumbnail-list",
		"config":{
			"limit":"4",
			"fixed":"true",
			"editors":[
				{
					"name":"Title",
					"alias":"title",
					"view":"textstring"
				},
				{
					"name":"Summary",
					"alias":"summary",
					"view":"textarea"
				},
				{
					"name":"Image",
					"alias":"image",
					"view":"mediapicker"
				},
				{
					"name":"Content",
					"alias":"content",
					"view":"contentpicker"
				}
			]
		}
	},
	{
		"name":"Blender",
		"alias":"Blender",
		"view":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/BlenderGridEditor.html",
		"icon":"icon-playing-cards"
	},
	{
		"name":"Rte",
		"alias":"rte",
		"view":"rte",
		"icon":"icon-trash"
	},
	{
		"name":"Image",
		"alias":"media",
		"view":"media",
		"icon":"icon-picture"
	},
	{
		"name":"Macro",
		"alias":"macro",
		"view":"macro",
		"icon":"icon-settings-alt"
	},
	{
		"name":"Embed",
		"alias":"embed",
		"view":"embed",
		"icon":"icon-movie-alt"
	},
	{
		"name":"Headline",
		"alias":"headline",
		"view":"textstring",
		"icon":"icon-coin",
		"config":{
			"style":"font-size: 36px; line-height: 45px; font-weight: bold",
			"markup":"<h1>#value#</h1>"
		}
	},
	{
		"name":"Slider",
		"alias":"slider",
		"view":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/BlenderGridEditor.html",
		"render":"/Views/Partials/Grid/Editors/slider.cshtml",
		"icon":"icon-slideshow",
		"config":{
			"limit":"10",
			"fixed":"false",
			"editors":[
				{
					"name":"Title",
					"alias":"title",
					"view":"textstring"
				},
				{
					"name":"Color",
					"alias":"color",
					"view":"colorPicker"
				},
				{
					"name":"Image",
					"alias":"image",
					"view":"mediapicker"
				},
				{
					"name":"Content",
					"alias":"content",
					"view":"contentpicker"
				},
				{
					"name":"Layers",
					"alias":"layers",
					"view":"layers"
				}
			]
		}
	},
	{
		"name":"Tabs",
		"alias":"tabs",
		"view":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/BlenderGridEditor.html",
		"render":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/Views/Tabs.cshtml",
		"icon":"icon-tab",
		"config":{
			"limit":"10",
			"fixed":"false",
			"editors":[
				{
					"name":"Title",
					"alias":"title",
					"view":"textstring"
				},
				{
					"name":"Content",
					"alias":"content",
					"view":"textarea"
				}
			]
		}
	},
	{
		"name":"Jumbotron",
		"alias":"jumbotron",
		"view":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/BlenderGridEditor.html",
		"render":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/Views/Jumbotron.cshtml",
		"icon":"icon-certificate",
		"config":{
			"limit":"1",
			"fixed":"true",
			"editors":[
				{
					"name":"Title",
					"alias":"title",
					"view":"textstring"
				},
				{
					"name":"Summary",
					"alias":"summary",
					"view":"textarea"
				},
				{
					"name":"Content",
					"alias":"content",
					"view":"contentpicker"
				}
			]
		}
	},
	{
		"name":"Accordion",
		"alias":"accordion",
		"view":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/BlenderGridEditor.html",
		"render":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/Views/Accordion.cshtml",
		"icon":"icon-list",
		"config":{
			"limit":"10",
			"fixed":"false",
			"editors":[
				{
					"name":"Title",
					"alias":"title",
					"view":"textstring"
				},
				{
					"name":"Content",
					"alias":"content",
					"view":"textarea"
				}
			]
		}
	},
	{
		"name":"test1",
		"alias":"test1",
		"view":"/App_Plugins/Lecoati.BlenderGrid/BlenderGridEditor/BlenderGridEditor.html",
		"icon":"icon-umb-developer",
		"config":{
			"renderInGrid":true,
			"fixed":true
		},
		"render":"test2"
	},
	{
		"name":"Custom",
		"alias":"custom",
		"view":"/App_Plugins/Lecoati.BlenderGrid/core/blendergrideditor.html",
		"icon":"icon-wall-plug",
		"config":{
			"editors":[
				{
					"name":"text",
					"alias":"text",
					"view":"textstring"
				}
			]
		},
		"render":"/App_Plugins/Lecoati.BlenderGrid/core/views/Base.cshtml",
		"frontView":"/Views/Partials/Grid/Editors/TestBlender.cshtml"
	}
]