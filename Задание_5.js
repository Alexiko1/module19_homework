class ElectricDevice {
    constructor (dcOutput, powerButton, deviceType){
    this.dcInput = '220v',
    this.deviceType = deviceType,
    this.dcOutput = dcOutput,
    this.powerButton = powerButton 
    }
  }
  ElectricDevice.prototype.getPowerOn = function (powerOn){
    console.log(`Device powered on after ${powerOn} seconds, you pushing the button`)
  }
  class ChargeDevice {
    constructor (deviceType, dcOutput, powerButton, chargeType, chargeTime) {
      this.deviceType = deviceType,  
      this.dcOutput = dcOutput,
      this.powerButton = powerButton,
      this.chargeType = chargeType,
      this.chargeTime = chargeTime
    }
  }
  ChargeDevice.prototype = new ElectricDevice()
  ChargeDevice.prototype.getPowerOn = function (powerOn){
    console.log(`Device powered on after ${powerOn} seconds, you pushing the button`)
  }
  const computer     = new ElectricDevice("Computer", '24v', 'In up of front');
  const tableLamp    = new ElectricDevice( "Table lamp", '12v', 'on the cable');
  const mobilePhone  = new ChargeDevice('Mobile phone', '5v', '5v', "wireless", '2 hours');
  
  computer.getPowerOn('zero')
  console.log(computer)
  tableLamp.getPowerOn('zero')
  console.log(tableLamp)
  mobilePhone.getPowerOn('5')
  console.log(mobilePhone)