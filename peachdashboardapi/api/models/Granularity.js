/**
 * Created by BlackLinden on 26/07/2016.
 */
module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  constants: {
    monthly : {
      name: 'month',
      interval: 'P1M'
    },
    daily : {
      name: 'day',
      interval: 'P1D'
    },
    yearly : {
      name: 'year',
      interval: 'P1Y'
    },
    weekly : {
      name: 'week',
      interval: 'P1D'
    },
    quarterly : {
      name: 'quarter',
      interval: 'P1M'
    }
  },
  attributes: {
    //e.g., 1
    id: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName: 'id'
    },

    // e.g., "Daily"
    name: {
      type: 'string',
      size: 50,
      columnName: 'name'
    },

    datasources:{
      collection: 'datasource',
      via: 'granularities',
      through: 'granularitydatasource'
    }
  }
}
