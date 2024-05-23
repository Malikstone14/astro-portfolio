import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import 'moment/locale/fr'; // Import de la locale française

const TimeZoneV2 = ({ timezone }) => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    moment.locale('fr'); // Définir la locale française ici

    const updateDateTime = () => {
      const now = moment().tz(timezone);
      setDateTime(now.format('l LT'));
    };

    // Mise à jour initiale
    updateDateTime();

    // Mettre à jour chaque seconde
    const interval = setInterval(updateDateTime, 1000);

    // Nettoyer l'intervalle lorsqu'on démonte le composant
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">Montréal, QC-Canada</p>
    </div>
  );
};

export default TimeZoneV2;


