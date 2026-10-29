const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&h=600&q=80`

const BOARD = img('photo-1518770660439-4636190af475')
const KIT = img('photo-1555664424-778a1e5e1b48')
const WIRES = img('photo-1558346490-a72e53ae2d4f')
const SOLDER = img('photo-1581092918056-0c4c3acd3789')
const REPAIR = img('photo-1601737487795-dab272f52420')

export const CATEGORIES = ['Boards', 'Sensors', 'Modules', 'Components', 'Tools']
export const BRANDS = ['Arduino', 'Espressif', 'Raspberry Pi', 'Generic']

// stock: false => out of stock. oldPrice => shows a discount badge.
export const products = [
  { id: 1, name: 'Arduino Uno R3', category: 'Boards', brand: 'Arduino', price: 450, oldPrice: 520, rating: 5, stock: true, image: KIT, description: 'The classic ATmega328P board. 14 digital I/O, 6 analog inputs, USB-B.' },
  { id: 2, name: 'Arduino Nano', category: 'Boards', brand: 'Arduino', price: 280, rating: 4, stock: true, image: BOARD, description: 'Compact breadboard-friendly board with ATmega328P.' },
  { id: 3, name: 'Arduino Mega 2560', category: 'Boards', brand: 'Arduino', price: 890, oldPrice: 1000, rating: 5, stock: true, image: WIRES, description: '54 digital I/O pins and 16 analog inputs for big projects.' },
  { id: 4, name: 'ESP32 DevKit V1', category: 'Boards', brand: 'Espressif', price: 340, rating: 5, stock: true, image: BOARD, description: 'Dual-core Wi-Fi + Bluetooth microcontroller board.' },
  { id: 5, name: 'ESP8266 NodeMCU', category: 'Boards', brand: 'Espressif', price: 220, rating: 4, stock: true, image: WIRES, description: 'Low-cost Wi-Fi board, Lua / Arduino compatible.' },
  { id: 6, name: 'Raspberry Pi Pico', category: 'Boards', brand: 'Raspberry Pi', price: 190, rating: 4, stock: false, image: BOARD, description: 'RP2040 dual-core ARM Cortex-M0+ microcontroller.' },
  { id: 7, name: 'Starter Kit (UNO + 200 parts)', category: 'Modules', brand: 'Arduino', price: 1350, oldPrice: 1600, rating: 5, stock: true, image: KIT, description: 'Everything to start: UNO, breadboard, LEDs, resistors, sensors, LCD.' },
  { id: 8, name: 'DHT22 Temperature & Humidity Sensor', category: 'Sensors', brand: 'Generic', price: 120, rating: 4, stock: true, image: WIRES, description: 'Digital sensor, ±0.5°C accuracy.' },
  { id: 9, name: 'HC-SR04 Ultrasonic Sensor', category: 'Sensors', brand: 'Generic', price: 60, rating: 4, stock: true, image: KIT, description: 'Distance sensor, 2cm–400cm range.' },
  { id: 10, name: 'MPU6050 Gyro + Accelerometer', category: 'Sensors', brand: 'Generic', price: 95, oldPrice: 110, rating: 5, stock: true, image: BOARD, description: '6-axis motion tracking over I2C.' },
  { id: 11, name: '16x2 LCD Display (I2C)', category: 'Modules', brand: 'Generic', price: 130, rating: 4, stock: true, image: KIT, description: 'Blue backlit character LCD with I2C backpack.' },
  { id: 12, name: 'SG90 Micro Servo', category: 'Modules', brand: 'Generic', price: 55, rating: 4, stock: true, image: KIT, description: '9g micro servo, 180° rotation.' },
  { id: 13, name: 'L298N Motor Driver', category: 'Modules', brand: 'Generic', price: 110, rating: 4, stock: false, image: SOLDER, description: 'Dual H-bridge driver for DC and stepper motors.' },
  { id: 14, name: 'Breadboard 830 Points', category: 'Components', brand: 'Generic', price: 70, rating: 5, stock: true, image: KIT, description: 'Solderless prototyping board.' },
  { id: 15, name: 'Resistor Assortment (600 pcs)', category: 'Components', brand: 'Generic', price: 150, oldPrice: 180, rating: 4, stock: true, image: SOLDER, description: '30 values, 1/4W 1% metal film.' },
  { id: 16, name: 'Jumper Wires (120 pcs)', category: 'Components', brand: 'Generic', price: 85, rating: 5, stock: true, image: WIRES, description: 'Male-male, male-female and female-female.' },
  { id: 17, name: 'Soldering Iron Kit 60W', category: 'Tools', brand: 'Generic', price: 520, rating: 4, stock: true, image: REPAIR, description: 'Adjustable temperature iron with stand, tips and solder.' },
  { id: 18, name: 'Digital Multimeter', category: 'Tools', brand: 'Generic', price: 380, oldPrice: 450, rating: 5, stock: true, image: SOLDER, description: 'Voltage, current, resistance and continuity testing.' },
]
