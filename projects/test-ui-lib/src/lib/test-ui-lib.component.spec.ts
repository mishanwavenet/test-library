import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUiLibComponent } from './test-ui-lib.component';

describe('TestUiLibComponent', () => {
  let component: TestUiLibComponent;
  let fixture: ComponentFixture<TestUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUiLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
