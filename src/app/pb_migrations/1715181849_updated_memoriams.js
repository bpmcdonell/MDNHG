/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gwj4ewxtaiv5p6p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hvwb682d",
    "name": "dod",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m77qodey",
    "name": "dob",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gwj4ewxtaiv5p6p")

  // remove
  collection.schema.removeField("hvwb682d")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m77qodey",
    "name": "dates",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
