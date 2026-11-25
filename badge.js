(function () {
  if (document.getElementById("orbit-badge")) return;

  const style = document.createElement("style");

  style.textContent = `
    #orbit-badge,
    #orbit-badge *,
    #orbit-badge *::before,
    #orbit-badge *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      line-height: normal;
      letter-spacing: normal;
      text-transform: none;
      text-indent: 0;
      float: none;
      -webkit-appearance: none;
      appearance: none;
    }

    #orbit-badge {
      position: fixed !important;
      bottom: 20px !important;
      right: 20px !important;
      z-index: 2147483647 !important;
      color: #3d3d3d;
      background: transparent !important;
      border: none !important;
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
      width: auto !important;
      height: auto !important;
      max-width: none !important;
      max-height: none !important;
      min-width: 0 !important;
      min-height: 0 !important;
      overflow: visible !important;
      pointer-events: auto !important;
    }

    #orbit-badge button {
      font: inherit;
      cursor: pointer;
      border: none;
      background: transparent;
      outline: none;
      box-shadow: none;
      color: inherit;
      text-align: inherit;
      text-decoration: none;
    }

    #orbit-badge-trigger {
      display: flex !important;
      align-items: center !important;
      gap: 9px !important;
      padding: 11px 17px !important;
      border-radius: 30px !important;
      background: #f27a97 !important;
      color: white !important;
      font-size: 14px !important;
      font-weight: 700 !important;
      box-shadow: 0 4px 20px rgba(224, 90, 122, 0.3) !important;
      transition: transform .2s, background .2s !important;
      border: none !important;
      line-height: 1.2 !important;
      white-space: nowrap !important;
    }

    #orbit-badge-trigger:hover {
      background: #e05a7a !important;
      transform: translateY(-2px) !important;
    }

    #orbit-badge-trigger svg {
      display: block !important;
      width: 1.5em !important;
      height: 1.5em !important;
      flex-shrink: 0 !important;
    }

    #orbit-badge-trigger span {
      display: flex !important;
      align-items: center !important;
    }

    #orbit-badge-popup {
      position: absolute !important;
      bottom: 55px !important;
      right: 0 !important;
      width: 245px !important;
      padding: 17px !important;
      border-radius: 15px !important;
      background: #fcd9e2 !important;
      box-shadow: 0 8px 35px rgba(224, 90, 122, 0.15) !important;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: .2s ease;
      border: 1px solid #f7b3c6 !important;
      text-align: left !important;
    }

    #orbit-badge-popup.open {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(0) !important;
    }

    #orbit-badge-popup h3 {
      margin: 0 0 8px !important;
      font-size: 18px !important;
      font-weight: 800 !important;
      color: #e05a7a !important;
      line-height: 1.3 !important;
      font-family: Arial, sans-serif !important;
    }

    #orbit-badge-popup p {
      margin: 0 0 15px !important;
      color: #555 !important;
      font-size: 13.5px !important;
      font-weight: 600 !important;
      line-height: 1.5 !important;
      font-family: Arial, sans-serif !important;
    }

    #orbit-badge-links {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      margin-top: 4px !important;
    }

    /* Row wrapper for the two smaller cards */
    #orbit-badge-row {
      display: flex !important;
      flex-direction: row !important;
      gap: 8px !important;
      align-items: stretch !important;
    }

    #orbit-badge-popup a {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 7px !important;
      flex: 1 1 0 !important;
      width: 0 !important;
      min-width: 0 !important;
      padding: 13px 6px !important;
      border-radius: 9px !important;
      background: #f7b3c6 !important;
      color: #3d3d3d !important;
      text-decoration: none !important;
      font-size: 12.5px !important;
      font-weight: 700 !important;
      transition: background .2s, color .2s !important;
      border: none !important;
      line-height: 1.2 !important;
      font-family: Arial, sans-serif !important;
      position: relative !important;
    }

    #orbit-badge-popup a:hover {
      background: #f4a3ba !important;
      color: #fff !important;
    }

    #orbit-badge-popup a svg {
      width: 22px !important;
      height: 22px !important;
      fill: currentColor !important;
      flex-shrink: 0 !important;
      display: block !important;
    }

    #orbit-badge-popup a span {
      display: block !important;
      white-space: nowrap !important;
    }

    /* Big email card at the top, full width */
    #orbit-badge-popup a.recommended {
      flex-direction: row !important;
      justify-content: center !important;
      gap: 10px !important;
      width: 100% !important;
      padding: 20px 12px !important;
      background: #f27a97 !important;
      color: #fff !important;
      border: 2px solid #e05a7a !important;
      box-shadow: 0 4px 14px rgba(224, 90, 122, 0.35) !important;
      font-size: 14px !important;
    }

    #orbit-badge-popup a.recommended:hover {
      background: #e05a7a !important;
    }

    #orbit-badge-popup a.recommended svg {
      width: 26px !important;
      height: 26px !important;
    }

    /* "Recommended" badge above the email card */
    #orbit-badge-popup a.recommended::after {
      content: "Recommended";
      position: absolute !important;
      top: -10px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      background: #e05a7a !important;
      color: #fff !important;
      font-size: 9px !important;
      font-weight: 800 !important;
      letter-spacing: .4px !important;
      padding: 3px 9px !important;
      border-radius: 20px !important;
      white-space: nowrap !important;
      line-height: 1.3 !important;
      font-family: Arial, sans-serif !important;
      box-shadow: 0 2px 6px rgba(224, 90, 122, 0.4) !important;
      pointer-events: none !important;
    }

    #orbit-badge-popup .footer {
      margin-top: 22px !important;
      color: #f27a97 !important;
      font-size: 11px !important;
      text-align: center !important;
      font-weight: 800 !important;
      letter-spacing: .3px !important;
      font-family: Arial, sans-serif !important;
    }
  `;

  document.head.appendChild(style);

  const badge = document.createElement("div");
  badge.id = "orbit-badge";

  badge.innerHTML = `
    <div id="orbit-badge-popup">
      <h3>want a website of your own?</h3>
      <p>Contact me the way that suits you best!</p>

      <div id="orbit-badge-links">
        <a href="mailto:justorbit@aster.cx" class="recommended">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2L12 12.4 19.6 7H4.4ZM4 17h16V9.2l-7.5 5.3a1 1 0 0 1-1 0L4 9.2V17Z"/>
          </svg>
          <span>Email Me</span>
        </a>

        <div id="orbit-badge-row">
          <a href="https://justorbit.pages.dev" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6v2h3v2H7v-2h3v-2H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 2v9h14V6H5Z"/>
            </svg>
            <span>Portfolio</span>
          </a>

          <a href="https://instagram.com/justorbit.dev" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/>
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div class="footer">Crafted by Orbit</div>
    </div>

    <button id="orbit-badge-trigger">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.376 14.826c-1.995 2.8-2.882 5.087-2.085 5.883c.796.797 3.083-.09 5.884-2.085c1.59-1.132 3.344-2.621 5.086-4.363s3.231-3.497 4.363-5.086c1.995-2.8 2.882-5.088 2.085-5.884c-.796-.797-3.083.09-5.883 2.085m3.798 3.799a7.2 7.2 0 0 1-9.45 9.45m7.917-11.716A7.2 7.2 0 1 0 6.91 17.09" />
        </svg>
      </span>
      Made by Orbit
    </button>
  `;

  document.body.appendChild(badge);

  const trigger = badge.querySelector("#orbit-badge-trigger");
  const popup = badge.querySelector("#orbit-badge-popup");

  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    popup.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    if (!badge.contains(event.target)) {
      popup.classList.remove("open");
    }
  });
})();
