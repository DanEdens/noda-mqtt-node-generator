window.noda.onNodeCreated = function(node) { broker.post(topic = "noda/nodes/" + node.uuid, message = $timestamp) }
window.noda.onNodeUpdated = function(node) { broker.post(topic = "noda/nodes/" + node.uuid, message = "Node updated:") }
window.noda.onNodeDeleted = function(node) { broker.nrost(topic = "noda/nodes/" + node.uuid); }

window.noda.onLinkCreated = function(link) { console.log("Link created: " + link.uuid); }
window.noda.onLinkUpdated = function(link) { console.log("Link updated: " + link.uuid); }
window.noda.onLinkDeleted = function(link) { console.log("Link deleted: " + link.uuid); }

// Node Properties
// uuid - A universal unique identifier for the node.numeric or string value such as "1234" or "PRODUCT-SKU-452"

// title - The main text appears above the node. It should be a short name or phrase.

// color - A hex value that represents the color of the shape. Ex. #000000 (black) #111111 (white) #110000 (red)

// opacity - A numerical value that represents how opaque or transparent the shape will appear. 0 is completely transparent and 1 is completely opaque.

// shape - The name of the shape model. Values: Ball, Box, Tetra, Cylinder, Diamond, Hourglass, Plus, Star

// imageUrl - A public URL that points to an image for display. Should include the protocol i.e. "https://images.cdn.com/test.png". Can be .png or jpg format.

// notes - A free form text field for additional information related to a node.

// pageUrl - A public URL that is accessible when examining the node.

// size - The relative size of the node. Default value is 5, can range from 1 to 45.

// location - A sub object that defines how the node should be positioned. It has the following properties:

// x - Position in X axis measured in meters.
// y - Position in Y axis measured in meters.
// z - Position in Z axis measured in meters.
// relativeTo - Specifies the frame of reference for the location. Can be one of: Origin, User or Window.
// selected - Indicates if the node is selected, shown by a flashing color.

// collapsed - Indicates if the node is in expanded or collapsed state. Collapsed nodes will hide all of the outgoing connected nodes..

// Link Properties
// uuid - A universal unique identifier for the link. This could be a numeric or string value such as "1234" or "PRODUCT-SKU-452"

// fromUuid - Corresponds to the uuid of the starting node for this link.

// toUuid - Corresponds to the uuid of the ending node for this link.

// title - The main text appears above the node. It should be a short name or phrase.

// color - A hex value that represents the color of the link. Ex. #000000 (black) #111111 (white) #110000 (red)

// shape - The pattern used to paint the link. Can be one of: Solid, Dash, Arrows. Solid is the default.

// size - The thickness of the line from 1 - 10. The default is 1.

// selected - Indicates if the link is selected, shown by a flashing color