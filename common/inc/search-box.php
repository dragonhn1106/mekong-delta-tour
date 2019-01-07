<div class="search-box">
    <ul class="tab-pannel">
      <li class="item"><a href="#tour" class="active">Tour</a></li>
      <li class="item"><a href="#ticket">Ticket</a></li>
      <li class="item"><a href="#accommodation">Accommodation</a></li>
    </ul>
    <div class="tab-content">
      <div id="tour" class="tab-item">
        <form action="" method="" class="form-box" name="tour_form_search">
          <div class="form-row">
            <div class="form-group destination-or-tour-name">
              <div class="select-icon select-place">
                <input type="text" class="form-control " name="tour_place" id="tour_place" placeholder="Destination or tour name">
              </div>
            </div>
            <div class="form-group">
              <div class="select-box select-icon select-duration">
                  <select name="duration" id="duration" class="form-control">
                    <option value="">All duration</option>
                    <option value="5">5 days (-)</option>
                    <option value="5-10">5 - 10 days</option>
                    <option value="10">10 days (+)</option>
                  </select>
                </div>
            </div>
            <div class="form-group">
              <div class="select-box select-icon select-duration">
                <select name="duration" id="duration" class="form-control">
                  <option value="">Guests</option>
                  <option value="1-adult">1 adult</option>
                  <option value="2-adult">2 adult</option>
                  <option value="3-adult">3 adult</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <input type="text" name="date_tour" id="date_tour" class="form-control datepicker" data-format="MM dd, yy">
            </div>
            <div class="form-group form-btn">
              <button type="button" name="tour_search" class="form-control btn"><i class="fa fa-search"></i> Search</button>
            </div>
          </div>
        </form>
      </div>
      <div id="ticket" class="tab-item">
        <form action="" method="" class="form-box" name="ticket_form_search">
          <div class="form-row">
            <ul class="list-radio" id="ticket_type">
              <li class="item">
                <input type="radio" name="ticket_type" id="one_way" value="1" checked="checked" class="form-control">
                <label for="one_way">One way</label>
              </li>
              <li class="item">
                <input type="radio" name="ticket_type" id="roundtrip" value="2" class="form-control">
                <label for="roundtrip">Roundtrip</label>
              </li>
            </ul>
          </div>
          <div class="form-row">
            <div class="form-group">
              <div class="select-icon select-place">
                <input type="text" name="ticket_from" id="ticket_from" class="form-control" placeholder="Destination or tour name">
              </div>
            </div>
            <div class="form-group">
              <div class="select-icon select-place">
                <input type="text" name="ticker_to" id="ticker_to" class="form-control" placeholder="To">
              </div>
            </div>
            <div class="form-group select-icon select-calendar">
              <input type="text" name="day_of_arrival" id="day_of_arrival" class="form-control">
            </div>
            <div class="form-group select-icon select-calendar" id="ticket_type_roundtrip">
              <input type="text" name="day_to_go" id="day_to_go" class="form-control">
            </div>
            <div class="form-group input-group" id="input-group">
              <textarea id="passenger_text" class="form-control" rows="1" readonly>Adult x 1</textarea>
              <div class="input-dropdown-mask"></div>
              <div class="input-dropdown">
                <div class="input-dropdown-row">
                  <div class="input-dropdown-name">
                    <label for="adult">Adult</label>
                    <span class="age">(Age 11-85)</span>
                  </div>
                  <div class="number-box">
                    <span class="number-btn minus"><i class="fa fa-minus"></i></span>
                    <input type="text" name="adult" id="adult" min="1" value="1" class="form-control" readonly>
                    <span class="number-btn plus"><i class="fa fa-plus"></i></span>
                  </div>
                </div>
                <div class="input-dropdown-row">
                  <div class="input-dropdown-name">
                    <label for="children">Children</label>
                    <span class="age">(Age 6-10)</span>
                  </div>
                  <div class="number-box">
                    <span class="number-btn minus"><i class="fa fa-minus"></i></span>
                    <input type="text" name="children" id="children" min="0" value="0" class="form-control" readonly>
                    <span class="number-btn plus"><i class="fa fa-plus"></i></span>
                  </div>
                </div>
                <div class="input-dropdown-row">
                  <div class="input-dropdown-name">
                    <label for="infants">Infants</label>
                    <span class="age">(Age 2-5)</span>
                  </div>
                  <div class="number-box">
                    <span class="number-btn minus"><i class="fa fa-minus"></i></span>
                    <input type="text" name="infants" id="infants" min="0" value="0" class="form-control" readonly>
                    <span class="number-btn plus"><i class="fa fa-plus"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group form-btn">
              <button type="button" name="tour_search" class="form-control btn"><i class="fa fa-search"></i> Search</button>
            </div>
          </div>
        </form>
      </div>
      <div id="accommodation" class="tab-item">
        <form action="" method="" class="form-box" name="accommodation_form_search">
          <div class="form-row">
            <div class="form-group">
              <div class="select-box select-icon select-place">
                <select name="accommodation_place" id="accommodation_place" class="form-control">
                  <option value="">Place</option>
                  <option value="">Place 1</option>
                  <option value="">Place 2</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="select-box">
                <select name="accommodation_star" id="accommodation_star" class="form-control">
                  <option value="">Stars</option>
                  <option value="5">5 Star</option>
                  <option value="4">4 Star</option>
                  <option value="3">3 Star</option>
                  <option value="2">2 Star</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="select-box">
                <select name="accommodation_type" id="accommodation_type" class="form-control">
                  <option value="">Night</option>
                  <option value="">Night 1</option>
                  <option value="">Night 2</option>
                </select>
              </div>
            </div>
            <div class="form-group select-icon select-calendar">
              <input type="text" name="accommodation_date" id="accommodation_date" class="form-control datepicker">
            </div>
            <div class="form-group form-btn">
              <button type="button" name="accommodation_search" class="form-control btn"><i class="fa fa-search"></i> Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
