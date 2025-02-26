import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { AuthService } from '../auth.service';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let service: AuthService;
  let router: Router;
  let localStorageMock: jasmine.SpyObj<Storage>;

  beforeEach(async () => {

    // Mock the Local Storage commands
    localStorageMock = jasmine.createSpyObj('Storage', ['getItem', 'setItem', 'removeItem']);

    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [SignInComponent], 
      providers: [
        AuthService, 
        {provide: 'Storage', useValue: localStorageMock},
        {provide: Router, useValue: routerMock}]}).compileComponents();

    //Inject the service
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  afterEach(()=> {
    localStorageMock.getItem.calls.reset();
    localStorageMock.setItem.calls.reset();
    localStorageMock.removeItem.calls.reset();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Succesful Login', () => {
    const mockUser = {username: 'testUser', password: 'Password11!!'};

    //Inform the Spy
    spyOn(service, 'findUser').and.returnValue(mockUser);
    spyOn(service, 'signIn').and.returnValue(true); 
    spyOn(service, 'setUsername');
    spyOn(window, 'alert');
    

    // Populate the User
    component.user = { username: 'testUser', password: 'Password11!!', confirmPassword: 'Password11!' };

    component.signIn();
  
    expect(service.signIn).toHaveBeenCalledWith('testUser', 'Password11!!');
    expect(service.setUsername).toHaveBeenCalledWith('testUser');
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(window.alert).toHaveBeenCalledWith('Sign In Successful')
  });

  describe('Unsuccesful Login', () => {

    beforeEach(() => {
      spyOn(service, 'signIn');
      spyOn(service, 'setUsername');
      spyOn(window, 'alert');
    })

    it('Invalid Username and Password', () => {
      const mockUser = {username: 'correctUser', password: 'CorrectPassword11!!' };

      spyOn(service, 'findUser').and.returnValue(mockUser);      
      //Indicate how the wrong Username and Password has been given
      component.user = {username: 'wrongUser', password: 'WrongPassword11!!', confirmPassword: 'WrongPassword11!!'};

      component.signIn();

      expect(service.signIn).toHaveBeenCalledWith('wrongUser', "WrongPassword11!!");
      expect(window.alert).toHaveBeenCalledWith('Invalid Credentials');
    });

    it('Invalid Username Only', () => {
      const mockUser = {username: 'correctUser', password: 'CorrectPassword11!!' };

      spyOn(service, 'findUser').and.returnValue(mockUser);
      
      //Indicate how the wrong Username has been given
      component.user = {username: 'wrongUser', password: 'CorrectPassword11!!', confirmPassword: 'CorrectPassword11!!'};

      component.signIn();

      expect(service.signIn).toHaveBeenCalledWith('wrongUser', "CorrectPassword11!!");
      expect(window.alert).toHaveBeenCalledWith('Invalid Credentials');
    })


    it('Invalid Password Only', () => {
      const mockUser = {username: 'testUser', password: 'CorrectPassword11!!' };

      spyOn(service, 'findUser').and.returnValue(mockUser);
      
      //Indicate how the wrong Password has been given
      component.user = {username: 'testUser', password: 'WrongPassword11!!', confirmPassword: 'WrongPassword11!!'};

      component.signIn();

      expect(service.signIn).toHaveBeenCalledWith('testUser', "WrongPassword11!!");
      expect(window.alert).toHaveBeenCalledWith('Invalid Credentials');
    });

    it('Invalid Empty Username Only', () => {
      const mockUser = {username: 'testUser', password: 'CorrectPassword11!!' };

      spyOn(service, 'findUser').and.returnValue(mockUser);
      
      //Indicate how the empty Username has been given
      component.user = {username: '', password: 'CorrectPassword11!!', confirmPassword: 'CorrectPassword11!!'};

      component.signIn();

      expect(window.alert).toHaveBeenCalledWith('Please Enter your Username');
    });    

    it('Invalid Empty Password Only', () => {
      const mockUser = {username: 'testUser', password: 'CorrectPassword11!!' };

      spyOn(service, 'findUser').and.returnValue(mockUser);
      
      component.user = {username: 'testUser', password: '', confirmPassword: 'CorrectPassword11!!'};

      component.signIn();

      expect(window.alert).toHaveBeenCalledWith('Please Enter your Password');
    });    

    it('Invalid Empty Username and Password', () => {
      const mockUser = {username: 'testUser', password: 'CorrectPassword11!!' };

      spyOn(service, 'findUser').and.returnValue(mockUser);
      
      component.user = {username: '', password: '', confirmPassword: 'CorrectPassword11!!'};

      component.signIn();

      // We just want the No Username Alert appearing
      expect(window.alert).toHaveBeenCalledWith('Please Enter your Username');
      expect(window.alert).toHaveBeenCalledTimes(1);
    });    


  })
});
