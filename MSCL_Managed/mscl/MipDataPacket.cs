//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 3.0.12
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class MipDataPacket : MipPacket {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;

  internal MipDataPacket(global::System.IntPtr cPtr, bool cMemoryOwn) : base(msclPINVOKE.MipDataPacket_SWIGUpcast(cPtr), cMemoryOwn) {
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(MipDataPacket obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~MipDataPacket() {
    Dispose();
  }

  public override void Dispose() {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_MipDataPacket(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      global::System.GC.SuppressFinalize(this);
      base.Dispose();
    }
  }

  public MipDataPacket() : this(msclPINVOKE.new_MipDataPacket__SWIG_0(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipDataPacket(MipPacket packet) : this(msclPINVOKE.new_MipDataPacket__SWIG_1(MipPacket.getCPtr(packet)), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipDataPoints data() {
    MipDataPoints ret = new MipDataPoints(msclPINVOKE.MipDataPacket_data(swigCPtr), false);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public Timestamp collectedTimestamp() {
    Timestamp ret = new Timestamp(msclPINVOKE.MipDataPacket_collectedTimestamp(swigCPtr), false);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public Timestamp utcTimestamp() {
    Timestamp ret = new Timestamp(msclPINVOKE.MipDataPacket_utcTimestamp(swigCPtr), false);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool utcTimeValid() {
    bool ret = msclPINVOKE.MipDataPacket_utcTimeValid(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public ushort utcTimeFlags() {
    ushort ret = msclPINVOKE.MipDataPacket_utcTimeFlags(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

}

}