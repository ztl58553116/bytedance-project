'use strict';

/**
 * adv service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::adv.adv');
