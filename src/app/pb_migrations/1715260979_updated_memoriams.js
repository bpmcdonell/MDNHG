/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gwj4ewxtaiv5p6p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8vxi6buz",
    "name": "designation",
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
  collection.schema.removeField("8vxi6buz")

  return dao.saveCollection(collection)
})
