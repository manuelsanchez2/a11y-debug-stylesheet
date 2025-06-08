/**
 * Selects the tracking button from the DOM.
 * @type {HTMLElement|null}
 */
const $trackingButton = document.querySelector('[data-btn="download"]')

/**
 * Event data to be sent on button click.
 * @type {Object}
 */
const eventClickData = {
  eventName: 'button_click',
  eventId: 'btn-download',
  projectId: 'a11y-debug-css',
  projectName: 'A11y Debug CSS',
}

/**
 * Event data to be sent on page view.
 * @type {Object}
 */
const eventViewData = {
  eventName: 'page_view',
  eventId: 'page-view',
  projectId: 'a11y-debug-css',
  projectName: 'A11y Debug CSS',
}

document.addEventListener('DOMContentLoaded', () => {
  trackView()

  addTrackingEvent($trackingButton, 'click', () => {
    trackDownloadClick()
  })
})

const trackView = async () => {
  const payload = {
    ...eventViewData,
    deviceType: checkUserDevice(),
    timestamp: new Date().toISOString(),
    inputMode: inputMode,
    userAgent: navigator.userAgent,
  }

  try {
    const response = await fetch(
      'https://msdev-event-tracker.vercel.app/api/events',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const result = await response.json()
    // console.log('✅ Page view tracking successful:', result)
  } catch (error) {
    console.error('❌ Page view tracking failed:', error)
  }
}

/**
 * Sends a tracking event to the API endpoint using async/await.
 * Includes device type, input mode, timestamp, and user agent.
 */
const trackDownloadClick = async () => {
  const payload = {
    ...eventClickData,
    deviceType: checkUserDevice(),
    timestamp: new Date().toISOString(),
    inputMode: inputMode,
    userAgent: navigator.userAgent,
  }

  try {
    const response = await fetch(
      'https://msdev-event-tracker.vercel.app/api/events',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const result = await response.json()
    // console.log('✅ Event tracking successful:', result)
  } catch (error) {
    console.error('❌ Event tracking failed:', error)
  }
}

/**
 * Adds an event listener to the provided element.
 *
 * @param {HTMLElement|null} element - The DOM element to attach the event to.
 * @param {string} eventType - The type of event to listen for.
 * @param {Function} callback - The function to run when the event occurs.
 */
const addTrackingEvent = (element, eventType, callback) => {
  if (element && element.addEventListener) {
    element.addEventListener(eventType, callback)
  } else {
    console.warn('Element not found or does not support addEventListener')
  }
}

/**
 * Determines the user's device type based on viewport width.
 * @returns {'desktop' | 'tablet' | 'mobile'} The device type.
 */
const checkUserDevice = () => {
  let deviceType = 'desktop'

  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    deviceType = 'tablet'
  } else if (window.innerWidth < 768) {
    deviceType = 'mobile'
  }

  return deviceType
}

let inputMode = 'unknown'

const handleMouse = () => {
  inputMode = 'mouse'
  document.body.dataset.inputMode = 'mouse'
  window.removeEventListener('mousemove', handleMouse)
}

const handleKeyboard = (event) => {
  const keys = [
    'Tab',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Enter',
    ' ',
  ]
  if (keys.includes(event.key)) {
    inputMode = 'keyboard'
    document.body.dataset.inputMode = 'keyboard'
    window.removeEventListener('keydown', handleKeyboard)
  }
}

window.addEventListener('mousemove', handleMouse, { once: true })
window.addEventListener('keydown', handleKeyboard, { once: true })
