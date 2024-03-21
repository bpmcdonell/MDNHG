/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "abpa3jpzc27o8ge",
    "created": "2024-02-28 20:25:04.692Z",
    "updated": "2024-02-28 20:25:04.692Z",
    "name": "testimonials",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2fkgjw3r",
        "name": "name",
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
        "id": "qrzoil8q",
        "name": "testimonial",
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
  const collection = dao.findCollectionByNameOrId("abpa3jpzc27o8ge");

  return dao.deleteCollection(collection);
})
