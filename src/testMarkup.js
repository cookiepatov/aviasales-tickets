<div className="app">
<header className="header">
  <button type="submit" className="button-reset">
  </button>
  
</header>
<main className="content">
 <fieldset className="transfers">
    <label className="transfers__caption">Количество пересадок</label>
    
    <label className="transfers__item" htmlFor="transfer-all">
      <input type="checkbox" name="transfer-all" id="transfer-all" className="transfers__checkbox"></input>
      <p className="transfers__checkbox-caption">Все</p>
    </label>
    
    <label className="transfers__item" htmlFor="transfer-no-transfers">
      <input type="checkbox" name="transfer-no-transfers" id="transfer-no-transfers" className="transfers__checkbox"></input>
      <p className="transfers__checkbox-caption">Без пересадок</p>
    </label>
    <label className="transfers__item" htmlFor="transfer-1">
    <input type="checkbox" name="transfer-1" id="transfer-1" className="transfers__checkbox"></input>
      <p className="transfers__checkbox-caption">1 пересадка</p>
    </label>
    <label className="transfers__item" htmlFor="transfer-2">
      <input type="checkbox" name="transfer-2" id="transfer-2" className="transfers__checkbox"></input>
      <p className="transfers__checkbox-caption">2 пересадки</p>
    </label>
    <label className="transfers__item" htmlFor="transfer-3">
      <input type="checkbox" name="transfer-3" id="transfer-3" className="transfers__checkbox"></input>
      <p className="transfers__checkbox-caption">3 пересадки</p>
    </label>
    
  </fieldset>
  
  <div className="sort-options">
    <div className="sort-options__item">
          <input id="cheapest" type="radio" name="sort-option" value="cheapest" defaultChecked></input>
          <label htmlFor="cheapest">Самый дешевый</label>
    </div>
    <div className="sort-options__item">
          <input id="fastest" type="radio" name="sort-option" value="fastest" ></input>
          <label htmlFor="fastest">Самый быстрый</label>
    </div>
    <div className="sort-options__item">
          <input id="optimal" type="radio" name="sort-option" value="optimal" ></input>
          <label htmlFor="optimal">Оптимальный</label>
    </div>
    {/* TODO-radio-class */}
  </div>
  <div className="card">
    <div className="card__main-info">
      <span className="card__price">13 400 Р</span>
      <img className="card__company" alt="S7" src="./S7 Logo.jpg"></img>
    </div>
    <div className="card__flight-info">
      <div className="info info_type_to">
        <span className="info__title">
          MOW - HKT
        </span>
        <span className="info__value">
          10:45 - 08:00
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          21ч 15м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          2 пересадки
        </span>
        <span className="info__value">
          HKG, JNB
        </span>
      </div>
      <div className="info info_type_from">
        <span className="info__title">
          HKT - MOW
        </span>
        <span className="info__value">
          11:20 - 00:50
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          13ч 30м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          1 пересадка
        </span>
        <span className="info__value">
          HKG
        </span>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card__main-info">
      <span className="card__price">13 400 Р</span>
      <img className="card__company" alt="S7" src="./S7 Logo.jpg"></img>
    </div>
    <div className="card__flight-info">
      <div className="info info_type_to">
        <span className="info__title">
          MOW - HKT
        </span>
        <span className="info__value">
          10:45 - 08:00
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          21ч 15м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          2 пересадки
        </span>
        <span className="info__value">
          HKG, JNB
        </span>
      </div>
      <div className="info info_type_from">
        <span className="info__title">
          HKT - MOW
        </span>
        <span className="info__value">
          11:20 - 00:50
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          13ч 30м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          1 пересадка
        </span>
        <span className="info__value">
          HKG
        </span>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card__main-info">
      <span className="card__price">13 400 Р</span>
      <img className="card__company" alt="S7" src="./S7 Logo.jpg"></img>
    </div>
    <div className="card__flight-info">
      <div className="info info_type_to">
        <span className="info__title">
          MOW - HKT
        </span>
        <span className="info__value">
          10:45 - 08:00
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          21ч 15м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          2 пересадки
        </span>
        <span className="info__value">
          HKG, JNB
        </span>
      </div>
      <div className="info info_type_from">
        <span className="info__title">
          HKT - MOW
        </span>
        <span className="info__value">
          11:20 - 00:50
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          13ч 30м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          1 пересадка
        </span>
        <span className="info__value">
          HKG
        </span>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card__main-info">
      <span className="card__price">13 400 Р</span>
      <img className="card__company" alt="S7" src="./S7 Logo.jpg"></img>
    </div>
    <div className="card__flight-info">
      <div className="info info_type_to">
        <span className="info__title">
          MOW - HKT
        </span>
        <span className="info__value">
          10:45 - 08:00
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          21ч 15м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          2 пересадки
        </span>
        <span className="info__value">
          HKG, JNB
        </span>
      </div>
      <div className="info info_type_from">
        <span className="info__title">
          HKT - MOW
        </span>
        <span className="info__value">
          11:20 - 00:50
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          13ч 30м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          1 пересадка
        </span>
        <span className="info__value">
          HKG
        </span>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card__main-info">
      <span className="card__price">13 400 Р</span>
      <img className="card__company" alt="S7" src="./S7 Logo.jpg"></img>
    </div>
    <div className="card__flight-info">
      <div className="info info_type_to">
        <span className="info__title">
          MOW - HKT
        </span>
        <span className="info__value">
          10:45 - 08:00
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          21ч 15м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          2 пересадки
        </span>
        <span className="info__value">
          HKG, JNB
        </span>
      </div>
      <div className="info info_type_from">
        <span className="info__title">
          HKT - MOW
        </span>
        <span className="info__value">
          11:20 - 00:50
        </span>
      </div>
      <div className="info info_type_time-to">
        <span className="info__title">
          В пути
        </span>
        <span className="info__value">
          13ч 30м
        </span>
      </div>
      <div className="info info_type_transfers-to">
        <span className="info__title">
          1 пересадка
        </span>
        <span className="info__value">
          HKG
        </span>
      </div>
    </div>
  </div>
<button type="button" className="show-more-button">
  Показать еще пять билетов!
</button>
</main>
</div>