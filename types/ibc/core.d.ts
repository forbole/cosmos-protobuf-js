declare namespace _default {
    namespace channel {
        export { channelQuery as query };
        export { channelTx as tx };
    }
    namespace client {
        export { clientQuery as query };
        export { clientTx as tx };
    }
    namespace connection {
        export { connectionQuery as query };
        export { connectionTx as tx };
    }
}
export default _default;
import * as channelQuery from "cosmos-protobuf-js/protobuf/ibc/core/channel/v1/query_pb_service";
import * as channelTx from "cosmos-protobuf-js/protobuf/ibc/core/channel/v1/tx_pb_service";
import * as clientQuery from "cosmos-protobuf-js/protobuf/ibc/core/client/v1/query_pb_service";
import * as clientTx from "cosmos-protobuf-js/protobuf/ibc/core/client/v1/tx_pb_service";
import * as connectionQuery from "cosmos-protobuf-js/protobuf/ibc/core/connection/v1/query_pb_service";
import * as connectionTx from "cosmos-protobuf-js/protobuf/ibc/core/connection/v1/tx_pb_service";
