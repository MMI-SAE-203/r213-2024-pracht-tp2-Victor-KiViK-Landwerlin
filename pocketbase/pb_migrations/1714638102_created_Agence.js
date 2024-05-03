/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5ewh9oouv30zp6e",
    "created": "2024-05-02 08:21:42.952Z",
    "updated": "2024-05-02 08:21:42.952Z",
    "name": "Agence",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y2d7udqw",
        "name": "Nom",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5ewh9oouv30zp6e");

  return dao.deleteCollection(collection);
})
