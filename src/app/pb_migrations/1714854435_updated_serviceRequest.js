/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0i6xiteo2ibt4z9")

  // update
  collection.schema.addField(new SchemaField({
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
        "memorialTribute",
        "livingTribute"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0i6xiteo2ibt4z9")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
