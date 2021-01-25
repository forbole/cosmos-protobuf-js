import * as Base from './base'
import * as Tendermint from './tendermint'
import * as Auth from './auth'
import * as Bank from './bank'
import * as Crisis from './crisis'
import * as Distribution from './distribution'
import * as Evidence from './evidence'
import * as Gov from './gov'
import * as Mint from './mint'
import * as Params from './params'
import * as Slashing from './slashing'
import * as Staking from './staking'
import * as Upgrade from './upgrade'
import * as Tx from './tx'
import * as IBC from './ibc'

import * as gRPC from './unary'

export const Cosmos = {
    gRPC,
    Base,
    Tendermint,
    Auth,
    Bank,
    Crisis,
    Distribution,
    Evidence,
    Gov,
    Mint,
    Params,
    Slashing,
    Staking,
    Upgrade,
    Tx,
    IBC
}