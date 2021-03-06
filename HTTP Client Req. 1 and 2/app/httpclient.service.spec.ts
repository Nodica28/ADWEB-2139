import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientComponent } from './httpclient/httpclient.component';

describe('HttpclientService', () => {
  let component: HttpclientComponent;
  let fixture: ComponentFixture<HttpclientComponent>;

  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      declarations: [ HttpclientComponent ]
    }).compileComponents();
});

  beforeEach(()=>{
    fixture = TestBed.createComponent(HttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',()=>{
    expect(component).toBeTruthy();
  });
});