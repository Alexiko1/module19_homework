class ElectricDevice {
    constructor (dcOutput, powerButton, deviceType){
    this.dcInput = '220v';
    this.deviceType = deviceType;
    this.dcOutput = dcOutput;
    this.powerButton = powerButton; 
    }
  
getPowerOn = function (powerOn){
  return `Device powered on after ${powerOn} seconds, you pushing the button` 
}
}

  class ChargeDevice {
    constructor (deviceType, dcOutput, powerButton, chargeType, chargeTime) {
      this.deviceType = deviceType; 
      this.dcOutput = dcOutput;
      this.powerButton = powerButton;
      this.chargeType = chargeType;
      this.chargeTime = chargeTime;
    }

  getPowerOn = function (powerOn){
    return `Device powered on after ${powerOn} seconds, you pushing the button`
  }
}
  const computer     = new ElectricDevice("Computer", "24v", "In up of front");
  const tableLamp    = new ElectricDevice( "Table lamp", "12v", "on the cable");
  const mobilePhone  = new ChargeDevice("Mobile phone", "5v", "5v", "wireless", "2 hours");
  
  console.log(computer.getPowerOn('zero'));
  console.log(computer);
  console.log(tableLamp.getPowerOn('zero'));
  console.log(tableLamp);
  console.log(mobilePhone.getPowerOn('5'));
  console.log(mobilePhone);