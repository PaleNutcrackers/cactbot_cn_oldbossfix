'use strict';

// Triggers for all occasions and zones.
[{
  zoneRegex: /.*/,
  triggers: [
    {
      id: 'General Provoke',
      regex: /:(\y{Name}):1D6D:Provoke:/,
      regexDe: /:(\y{Name}):1D6D:Herausforderung:/,
      regexFr: /:(\y{Name}):1D6D:Provocation:/,
      regexCn: /:(\y{Name}):1D6D:挑衅:/,
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: function(data, matches) {
        return {
          en: 'Provoke: ' + data.ShortName(matches[1]),
          de: 'Herausforderung: ' + data.ShortName(matches[1]),
          fr: 'Provocation: ' + data.ShortName(matches[1]),
          cn: '挑衅: ' + data.ShortName(matches[1]),
        };
      },
    },
    {
      id: 'General Ultimatum',
      regex: /:(\y{Name}):1D73:Ultimatum:/,
      regexJa: /:(\y{Name}):1D73:アルティメイタム:/,
      regexCn: /:(\y{Name}):1D73:最后通牒:/,
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: function(data, matches) {
        return {
          en: 'Ultimatum: ' + data.ShortName(matches[1]),
          cn: '最后通牒: ' + data.ShortName(matches[1]),
        };
      },
    },
    {
      id: 'General Shirk',
      regex: /:(\y{Name}):1D71:Shirk:/,
      regexDe: /:(\y{Name}):1D71:Geteiltes Leid:/,
      regexFr: /:(\y{Name}):1D71:Dérobade:/,
      regexJa: /:(\y{Name}):1D71:シャーク:/,
      regexCn: /:(\y{Name}):1D71:退避:/,
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: function(data, matches) {
        return {
          en: 'Shirk: ' + data.ShortName(matches[1]),
          de: 'Geteiltes Leid: ' + data.ShortName(matches[1]),
          fr: 'Dérobade: ' + data.ShortName(matches[1]),
          ja: 'シャーク: ' + data.ShortName(matches[1]),
          cn: '退避: ' + data.ShortName(matches[1]),
        };
      },
    },
    {
      id: 'General Holmgang',
      regex: /:(\y{Name}):2B:Holmgang:/,
      regexJa: /:(\y{Name}):2B:ホルムギャング:/,
      regexCn: /:(\y{Name}):2B:死斗:/,
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: function(data, matches) {
        return {
          en: 'Holmgang: ' + data.ShortName(matches[1]),
          cn: '死斗: ' + data.ShortName(matches[1]),
        };
      },
    },
    {
      id: 'General Hallowed',
      regex: /:(\y{Name}):1E:Hallowed Ground:/,
      regexDe: /:(\y{Name}):1E:Heiliger Boden:/,
      regexFr: /:(\y{Name}):1E:Invincible:/,
      regexJa: /:(\y{Name}):1E:インビンシブル:/,
      regexCn: /:(\y{Name}):1E:神圣领域:/,
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: function(data, matches) {
        return {
          en: 'Hallowed: ' + data.ShortName(matches[1]),
          de: 'Heiliger Boden: ' + data.ShortName(matches[1]),
          fr: 'Invincible: ' + data.ShortName(matches[1]),
          ja: 'インビンシブル: ' + data.ShortName(matches[1]),
          cn: '神圣领域: ' + data.ShortName(matches[1]),
        };
      },
    },
    {
      id: 'General Living',
      regex: /:(\y{Name}):E36:Living Dead:/,
      regexDe: /:(\y{Name}):E36:Totenerweckung:/,
      regexFr: /:(\y{Name}):E36:Mort-Vivant:/,
      regexJa: /:(\y{Name}):E36:リビングデッド:/,
      regexCn: /:(\y{Name}):E36:行尸走肉:/,
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: function(data, matches) {
        return {
          en: 'Living: ' + data.ShortName(matches[1]),
          de: 'Totenerweckung: ' + data.ShortName(matches[1]),
          fr: 'Mort-vivant: ' + data.ShortName(matches[1]),
          ja: 'リビングデッド: ' + data.ShortName(matches[1]),
          cn: '行尸走肉: ' + data.ShortName(matches[1]),
        };
      },
    },
    {
      id: 'General Walking',
      regex: /:(\y{Name}) gains the effect of Walking Dead/,
      regexDe: /:(\y{Name}) gains the effect of Erweckter/,
      regexFr: /:(\y{Name}) gains the effect of Marcheur Des Limbes/,
      regexCn: /:(\y{Name}) gains the effect of 死而不僵/,
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: function(data, matches) {
        return {
          en: 'Walking: ' + data.ShortName(matches[1]),
          de: 'Erweckter: ' + data.ShortName(matches[1]),
          fr: 'Marcheur Des Limbes: ' + data.ShortName(matches[1]),
          cn: '死而不僵: ' + data.ShortName(matches[1]),
        };
      },
    },
    {
      id: 'General Ready check',
      regex: /:(?:(\y{Name}) has initiated|You have commenced) a ready check\./,
      regexDe: /:(?:(\y{Name}) hat|Du hast) eine Bereitschaftsanfrage gestellt\./,
      regexFr: /:Un appel de préparation a été lancé par (\y{Name})\./,
      regexCn: /:(\y{Name})?发起了准备确认/,
      sound: '../../resources/sounds/Overwatch/D.Va_-_Game_on.ogg',
      soundVolume: 0.6,
    },
  ],
}];