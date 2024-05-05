/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9js0fy7ff435ctw",
    "created": "2024-05-05 02:20:41.741Z",
    "updated": "2024-05-05 02:20:41.741Z",
    "name": "volunteerForm",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1kqk0qhj",
        "name": "FirstName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "b6k3ozqu",
        "name": "LastName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "i9osulho",
        "name": "Email",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "temvlguw",
        "name": "PhoneNumber",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "fyjeoi63",
        "name": "Address",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mjwlhbyr",
        "name": "City",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xxyr8w9s",
        "name": "ZipCode",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "hh59z1ce",
        "name": "County",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "NA",
            "Allegany",
            "AnneArundel",
            "BaltimoreCity",
            "BaltimoreCounty",
            "Calvert",
            "Caroline",
            "Carroll",
            "Cecil",
            "Charles",
            "Dorchester",
            "Frederick",
            "Garrett",
            "Harford",
            "Howard",
            "Kent",
            "Montgomery",
            "PrinceGeorges",
            "QueenAnnes",
            "Somerset",
            "StMarys",
            "Talbot",
            "Washington",
            "Wicomico",
            "Worcester"
          ]
        }
      },
      {
        "system": false,
        "id": "ou0cqleh",
        "name": "Designation",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "NA",
            "RN",
            "LPN",
            "CNA",
            "Other"
          ]
        }
      },
      {
        "system": false,
        "id": "7xo6znej",
        "name": "EmploymentStatus",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "NA",
            "Employed",
            "Unemployed",
            "Retired",
            "Student"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9js0fy7ff435ctw");

  return dao.deleteCollection(collection);
})
