/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0i6xiteo2ibt4z9",
    "created": "2024-05-04 18:50:54.583Z",
    "updated": "2024-05-04 18:50:54.583Z",
    "name": "serviceRequest",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w87uuoyp",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Funeral",
            "Graveside",
            "CelebrationOfLife",
            "LivingTribute",
            "Other"
          ]
        }
      },
      {
        "system": false,
        "id": "i5kbtp7e",
        "name": "dateOfService",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "tdmf6ufs",
        "name": "honoredName",
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
        "id": "lzozevul",
        "name": "reqName",
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
        "id": "ckkaucgs",
        "name": "reqPhone",
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
        "id": "m4d7sh0o",
        "name": "reqEmail",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "d0nmvdaw",
        "name": "reqRelation",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("0i6xiteo2ibt4z9");

  return dao.deleteCollection(collection);
})
