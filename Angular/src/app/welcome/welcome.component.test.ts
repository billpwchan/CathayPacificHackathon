import * as welcome_component from "./welcome.component"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new welcome_component.WelcomeComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.ngOnInit()
        }
    
        expect(callFunction).not.toThrow()
    })
})
