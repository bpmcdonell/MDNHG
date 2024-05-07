/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0i6xiteo2ibt4z9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v6zela9e",
    "name": "otherService",
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
  const collection = dao.findCollectionByNameOrId("0i6xiteo2ibt4z9")

  // remove
  collection.schema.removeField("v6zela9e")

  return dao.saveCollection(collection)
})
